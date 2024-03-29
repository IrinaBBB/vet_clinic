import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { router } from '../router/Routes.tsx'

axios.defaults.baseURL = 'http://localhost:5002/api/'
axios.defaults.withCredentials = true
const responseBody = (response: AxiosResponse) => response.data
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000))

axios.interceptors.response.use(
    async (response) => {
        await sleep()
        return response
    },
    (error: AxiosError) => {
        const { data, status } = error.response as AxiosResponse
        switch (status) {
            case 400:
                if (data.errors) {
                    const modelStateErrors: string[] = []
                    for (const key in data.errors) {
                        if (data.errors[key]) {
                            modelStateErrors.push(data.errors[key])
                        }
                    }
                    throw modelStateErrors.flat()
                }
                toast.error(data.title)
                break
            case 401:
                toast.error(data.title)
                break
            case 404:
                toast.error(data.title)
                break
            case 500:
                toast.error(data.title)
                console.log('hello')
                router
                    .navigate('/server-error', { state: { error: data } })
                    .then()
                break
            default:
                break
        }
        console.log(error.response)
        return error
    },
)

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Pets = {
    list: () => requests.get('animals'),
    details: (id: number) => requests.get(`animals/${id}`),
}

const Vets = {
    list: () => requests.get('vets'),
    details: (id: number) => requests.get(`vets/${id}`),
}

const ProductList = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`),
}

const Cart = {
    get: () => requests.get('basket'),
    details: (id: number) => requests.get(`basket/${id}`),
    addItem: (productId: number, quantity = 1) =>
        requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) =>
        requests.delete(`basket?productId=${productId}&quantity=${quantity}`),
}

const TestErrors = {
    get400Error: () => requests.get('error/bad-request'),
    get401Error: () => requests.get('error/unauthorized'),
    get404Error: () => requests.get('error/not-found'),
    get500Error: () => requests.get('error/server-error'),
    getValidationError: () => requests.get('error/validation-error'),
}

const agent = {
    Pets,
    Vets,
    ProductList,
    Cart,
    TestErrors,
}

export default agent

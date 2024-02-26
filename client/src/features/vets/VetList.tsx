import {useNavigate} from 'react-router-dom'
import Pagination from '../../app/layout/Pagination.tsx'
import {LuInfo, LuPen, LuTrash2} from 'react-icons/lu'
import {
    useAppDispatch,
    useAppSelector,
} from '../../app/store/configureStore.ts'
import {fetchVetsAsync, vetSelectors} from "./vetSlice.ts";
import {useEffect} from "react";
import LoadingComponent from "../../app/components/LoadingComponent.tsx";

function VetList() {
    const navigate = useNavigate()

    function handleClick(id: number) {
        navigate(`/vets/${id}`)
    }

    const vets = useAppSelector(vetSelectors.selectAll)
    const {vetsLoaded, status} = useAppSelector((state) => state.vets)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!vetsLoaded) dispatch(fetchVetsAsync())
    }, [vetsLoaded, dispatch])

    if (status.includes('pending'))
        return <LoadingComponent dark={true} message="Loading vets..."/>

    return (
        <>
            <div className="overflow-auto rounded-lg shadow hidden md:block font-montserrat">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200 text-blue-800 uppercase">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                            &nbsp;
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                            Name
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                            Date of Birth
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                            Date of Graduation
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-center whitespace-nowrap">
                            &nbsp;
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {vets!.map((vet) => (
                        <tr
                            className="even:bg-white odd:bg-indigo-50"
                            key={vet.id}
                        >
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex justify-center">
                                <svg
                                    className="text-indigo-600 border-indigo-600 rounded-full bg-indigo-50 border w-[70px] h-[70px]"
                                    fill="currentColor"
                                    viewBox="0 -150 500 800"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            d="m268.949 170.658c-7.848 18.019-18.503 27.575-18.589 27.652-.026.023-.054.046-.08.07-7.445 6.68-11.716 16.247-11.716 26.25 0 11.164 5.102 21.455 13.997 28.236 9.454 7.207 21.979 9.617 33.505 6.452 4.544-1.248 9.83-1.908 15.288-1.908 5.549 0 10.911.681 15.508 1.97 3.397.953 6.871 1.422 10.33 1.422 7.436 0 14.794-2.169 21.14-6.361 8.718-5.758 14.474-14.849 15.791-24.942.001-.002.001-.004.001-.006 1.627-12.539-3.19-24.604-12.9-32.378-3.354-3.389-11.145-12.209-17.352-26.461-5.485-13.155-18.221-21.65-32.463-21.65-14.24-.001-26.973 8.496-32.46 21.654zm13.829 5.81c3.141-7.572 10.454-12.464 18.631-12.464 8.18 0 15.494 4.891 18.634 12.461l.05.117c7.432 17.09 17.057 27.698 20.851 31.466.214.212.44.412.678.597 5.733 4.463 8.585 11.536 7.628 18.917-.766 5.856-4.027 10.958-9.184 14.364-5.664 3.74-12.646 4.836-19.153 3.012-5.896-1.653-12.66-2.527-19.558-2.527-6.781 0-13.441.845-19.262 2.443-7.043 1.935-14.683.47-20.438-3.917-5.218-3.978-8.091-9.769-8.091-16.308 0-5.737 2.445-11.226 6.71-15.063 1.062-.939 13.388-12.13 22.454-32.981z"/>
                                        <path
                                            d="m226.316 133.513c-5.843-1.861-11.823-1.454-16.837 1.144-12.256 6.345-15.694 23.267-7.826 38.528 4.302 8.34 11.258 14.553 19.084 17.047 2.416.77 4.854 1.152 7.239 1.152 3.383 0 6.658-.77 9.6-2.292 12.256-6.344 15.694-23.266 7.827-38.525v-.001c-4.302-8.345-11.259-14.561-19.087-17.053zm4.365 42.256c-1.865.965-3.961.625-5.39.169-4-1.274-7.854-4.875-10.307-9.63-4.224-8.192-2.657-16.236 1.392-18.332.878-.455 1.808-.621 2.694-.621.996 0 1.938.208 2.694.449 4 1.274 7.853 4.875 10.307 9.634 4.223 8.193 2.658 16.236-1.39 18.331z"/>
                                        <path
                                            d="m364.915 189.09c2.943 1.523 6.217 2.292 9.601 2.292 2.384 0 4.823-.382 7.238-1.152 7.826-2.493 14.782-8.707 19.086-17.048 7.867-15.26 4.429-32.182-7.825-38.525-5.017-2.599-10.996-3.006-16.84-1.145-7.827 2.493-14.784 8.708-19.087 17.051v.001c-7.867 15.26-4.429 32.182 7.827 38.526zm5.505-31.651c2.454-4.758 6.307-8.36 10.308-9.634 1.428-.454 3.521-.795 5.39.172 4.047 2.095 5.614 10.139 1.392 18.33-2.454 4.756-6.308 8.357-10.309 9.632-1.429.455-3.524.796-5.39-.17-4.047-2.095-5.614-10.138-1.391-18.33z"/>
                                        <path
                                            d="m271.509 141.059c6.899 0 13.155-4.023 17.163-11.039 3.485-6.103 4.948-14.132 4.013-22.029-1.83-15.52-12.463-27.676-24.209-27.676-6.899 0-13.153 4.021-17.159 11.032-3.483 6.099-4.946 14.129-4.013 22.027 1.829 15.524 12.461 27.685 24.205 27.685zm-7.167-42.272c.465-.814 2.139-3.472 4.134-3.472 3.03 0 8.29 5.757 9.313 14.434v.005c.559 4.707-.242 9.502-2.141 12.826-.467.816-2.143 3.479-4.139 3.479-3.028 0-8.285-5.76-9.309-14.443-.556-4.711.243-9.507 2.142-12.829z"/>
                                        <path
                                            d="m331.493 141.059c11.744 0 22.376-12.161 24.205-27.683.934-7.899-.529-15.928-4.013-22.03-4.006-7.011-10.26-11.032-17.16-11.032-11.746 0-22.379 12.157-24.209 27.676-.936 7.896.527 15.926 4.015 22.03 4.007 7.016 10.263 11.039 17.162 11.039zm-6.28-31.305v-.005c1.022-8.677 6.282-14.434 9.313-14.434 1.996 0 3.67 2.658 4.135 3.471 1.897 3.323 2.698 8.12 2.142 12.832-1.023 8.681-6.28 14.441-9.309 14.441-1.996 0-3.672-2.663-4.138-3.478-1.9-3.326-2.702-8.121-2.143-12.827z"/>
                                        <path
                                            d="m72.428 449.907c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-7.69 6.239-13.946 13.907-13.946s13.907 6.256 13.907 13.946c0 7.689-6.239 13.945-13.907 13.945-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5c15.939 0 28.907-12.984 28.907-28.945s-12.967-28.946-28.907-28.946-28.907 12.985-28.907 28.946z"/>
                                        <path
                                            d="m472.659 181.01c0-4.142-3.357-7.5-7.5-7.5h-7.201v-114.424c0-17.647-13.326-32.236-30.429-34.204-5.525-7.998-19.145-24.882-35.658-24.882-17.932 0-32.52 14.609-32.52 32.565s14.588 32.565 32.52 32.565c16.625 0 30.318-17.115 35.77-25.045 8.742 1.876 15.317 9.683 15.317 19v114.425h-7.799c-4.143 0-7.5 3.358-7.5 7.5 0 69.847-56.709 126.671-126.414 126.671-47.075 0-89.978-26.02-111.966-67.905-1.926-3.668-6.46-5.081-10.126-3.155-3.667 1.925-5.08 6.459-3.155 10.126 24.588 46.837 72.58 75.933 125.248 75.933 75.463 0 137.311-59.529 141.219-134.171h15.019c-3.922 82.949-72.501 149.229-156.237 149.229-83.735 0-152.313-66.28-156.236-149.229h15.02c.471 8.969 1.786 17.862 3.927 26.529.994 4.021 5.059 6.476 9.08 5.482s6.476-5.059 5.482-9.08c-2.446-9.901-3.686-20.14-3.686-30.431 0-4.142-3.358-7.5-7.5-7.5h-8.452v-114.423c0-9.317 6.575-17.124 15.317-19 5.452 7.93 19.145 25.045 35.77 25.045 17.931 0 32.519-14.609 32.519-32.565s-14.589-32.566-32.52-32.566c-16.513 0-30.133 16.885-35.659 24.883-17.103 1.968-30.429 16.557-30.429 34.204v114.423h-6.548c-4.142 0-7.5 3.358-7.5 7.5 0 92.174 72.861 167.62 163.913 171.567v101.849c0 23.476-19.056 42.574-42.478 42.574s-42.478-19.099-42.478-42.574v-59.112c0-31.746-25.784-57.574-57.478-57.574-29.294 0-53.54 22.065-57.043 50.474-30.869 3.523-54.929 29.847-54.929 61.693 0 34.238 27.811 62.093 61.994 62.093s61.994-27.854 61.994-62.093c0-31.5-23.539-57.596-53.924-61.57 3.331-20.168 20.855-35.598 41.907-35.598 23.422 0 42.478 19.099 42.478 42.574v59.112c0 31.746 25.784 57.574 57.478 57.574s57.478-25.828 57.478-57.574v-101.848c91.053-3.947 163.915-79.392 163.915-171.567zm-80.788-130.879c-9.66 0-17.52-7.88-17.52-17.565s7.86-17.566 17.52-17.566c8.307 0 17.75 10.68 22.714 17.579-5.314 7.395-14.801 17.552-22.714 17.552zm-181.903-35.131c9.66 0 17.519 7.88 17.519 17.565s-7.859 17.565-17.519 17.565c-8.302 0-17.738-10.666-22.705-17.565 4.971-6.903 14.405-17.565 22.705-17.565zm-61.639 434.907c0 25.967-21.082 47.093-46.994 47.093s-46.994-21.126-46.994-47.093c0-25.968 21.082-47.094 46.994-47.094s46.994 21.126 46.994 47.094z"/>
                                    </g>
                                </svg>
                            </td>
                            <td className=" p-3 text-gray-700 whitespace-nowrap text-center">
                                {vet.name}
                            </td>
                            <td className=" p-3 text-gray-700 whitespace-nowrap text-center">
                                {vet.dateOfBirth.toString()}
                            </td>
                            <td className=" p-3 text-gray-700 whitespace-nowrap text-center">
                                {vet.dateOfGraduation.toString()}
                            </td>
                            <td className="p-3 text-gray-700 whitespace-nowrap text-center">
                                <button
                                    className="bg-blue-300 p-3 rounded-full me-2 hover:scale-125 transition-all"
                                    onClick={() => handleClick(vet.id)}
                                >
                                    <LuInfo/>
                                </button>
                                <button className="bg-yellow-300 p-3 rounded-full me-2 hover:scale-110 transition-all">
                                    <LuPen/>
                                </button>
                                <button className="bg-red-300 p-3 rounded-full hover:scale-110 transition-all">
                                    <LuTrash2/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div
                className=" grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden"
                role="table"
            >
                {vets!.map((vet) => (
                    <div className=" bg-white p-4 rounded-lg shadow bg-gradient-to-tr from-white to-indigo-100">
                        <div className=" flex items-center">
                            <svg
                                className="text-indigo-600 border-indigo-600 rounded-full bg-indigo-50 border w-[70px] h-[70px]"
                                fill="currentColor"
                                viewBox="0 -150 500 800"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        d="m268.949 170.658c-7.848 18.019-18.503 27.575-18.589 27.652-.026.023-.054.046-.08.07-7.445 6.68-11.716 16.247-11.716 26.25 0 11.164 5.102 21.455 13.997 28.236 9.454 7.207 21.979 9.617 33.505 6.452 4.544-1.248 9.83-1.908 15.288-1.908 5.549 0 10.911.681 15.508 1.97 3.397.953 6.871 1.422 10.33 1.422 7.436 0 14.794-2.169 21.14-6.361 8.718-5.758 14.474-14.849 15.791-24.942.001-.002.001-.004.001-.006 1.627-12.539-3.19-24.604-12.9-32.378-3.354-3.389-11.145-12.209-17.352-26.461-5.485-13.155-18.221-21.65-32.463-21.65-14.24-.001-26.973 8.496-32.46 21.654zm13.829 5.81c3.141-7.572 10.454-12.464 18.631-12.464 8.18 0 15.494 4.891 18.634 12.461l.05.117c7.432 17.09 17.057 27.698 20.851 31.466.214.212.44.412.678.597 5.733 4.463 8.585 11.536 7.628 18.917-.766 5.856-4.027 10.958-9.184 14.364-5.664 3.74-12.646 4.836-19.153 3.012-5.896-1.653-12.66-2.527-19.558-2.527-6.781 0-13.441.845-19.262 2.443-7.043 1.935-14.683.47-20.438-3.917-5.218-3.978-8.091-9.769-8.091-16.308 0-5.737 2.445-11.226 6.71-15.063 1.062-.939 13.388-12.13 22.454-32.981z"/>
                                    <path
                                        d="m226.316 133.513c-5.843-1.861-11.823-1.454-16.837 1.144-12.256 6.345-15.694 23.267-7.826 38.528 4.302 8.34 11.258 14.553 19.084 17.047 2.416.77 4.854 1.152 7.239 1.152 3.383 0 6.658-.77 9.6-2.292 12.256-6.344 15.694-23.266 7.827-38.525v-.001c-4.302-8.345-11.259-14.561-19.087-17.053zm4.365 42.256c-1.865.965-3.961.625-5.39.169-4-1.274-7.854-4.875-10.307-9.63-4.224-8.192-2.657-16.236 1.392-18.332.878-.455 1.808-.621 2.694-.621.996 0 1.938.208 2.694.449 4 1.274 7.853 4.875 10.307 9.634 4.223 8.193 2.658 16.236-1.39 18.331z"/>
                                    <path
                                        d="m364.915 189.09c2.943 1.523 6.217 2.292 9.601 2.292 2.384 0 4.823-.382 7.238-1.152 7.826-2.493 14.782-8.707 19.086-17.048 7.867-15.26 4.429-32.182-7.825-38.525-5.017-2.599-10.996-3.006-16.84-1.145-7.827 2.493-14.784 8.708-19.087 17.051v.001c-7.867 15.26-4.429 32.182 7.827 38.526zm5.505-31.651c2.454-4.758 6.307-8.36 10.308-9.634 1.428-.454 3.521-.795 5.39.172 4.047 2.095 5.614 10.139 1.392 18.33-2.454 4.756-6.308 8.357-10.309 9.632-1.429.455-3.524.796-5.39-.17-4.047-2.095-5.614-10.138-1.391-18.33z"/>
                                    <path
                                        d="m271.509 141.059c6.899 0 13.155-4.023 17.163-11.039 3.485-6.103 4.948-14.132 4.013-22.029-1.83-15.52-12.463-27.676-24.209-27.676-6.899 0-13.153 4.021-17.159 11.032-3.483 6.099-4.946 14.129-4.013 22.027 1.829 15.524 12.461 27.685 24.205 27.685zm-7.167-42.272c.465-.814 2.139-3.472 4.134-3.472 3.03 0 8.29 5.757 9.313 14.434v.005c.559 4.707-.242 9.502-2.141 12.826-.467.816-2.143 3.479-4.139 3.479-3.028 0-8.285-5.76-9.309-14.443-.556-4.711.243-9.507 2.142-12.829z"/>
                                    <path
                                        d="m331.493 141.059c11.744 0 22.376-12.161 24.205-27.683.934-7.899-.529-15.928-4.013-22.03-4.006-7.011-10.26-11.032-17.16-11.032-11.746 0-22.379 12.157-24.209 27.676-.936 7.896.527 15.926 4.015 22.03 4.007 7.016 10.263 11.039 17.162 11.039zm-6.28-31.305v-.005c1.022-8.677 6.282-14.434 9.313-14.434 1.996 0 3.67 2.658 4.135 3.471 1.897 3.323 2.698 8.12 2.142 12.832-1.023 8.681-6.28 14.441-9.309 14.441-1.996 0-3.672-2.663-4.138-3.478-1.9-3.326-2.702-8.121-2.143-12.827z"/>
                                    <path
                                        d="m72.428 449.907c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-7.69 6.239-13.946 13.907-13.946s13.907 6.256 13.907 13.946c0 7.689-6.239 13.945-13.907 13.945-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5c15.939 0 28.907-12.984 28.907-28.945s-12.967-28.946-28.907-28.946-28.907 12.985-28.907 28.946z"/>
                                    <path
                                        d="m472.659 181.01c0-4.142-3.357-7.5-7.5-7.5h-7.201v-114.424c0-17.647-13.326-32.236-30.429-34.204-5.525-7.998-19.145-24.882-35.658-24.882-17.932 0-32.52 14.609-32.52 32.565s14.588 32.565 32.52 32.565c16.625 0 30.318-17.115 35.77-25.045 8.742 1.876 15.317 9.683 15.317 19v114.425h-7.799c-4.143 0-7.5 3.358-7.5 7.5 0 69.847-56.709 126.671-126.414 126.671-47.075 0-89.978-26.02-111.966-67.905-1.926-3.668-6.46-5.081-10.126-3.155-3.667 1.925-5.08 6.459-3.155 10.126 24.588 46.837 72.58 75.933 125.248 75.933 75.463 0 137.311-59.529 141.219-134.171h15.019c-3.922 82.949-72.501 149.229-156.237 149.229-83.735 0-152.313-66.28-156.236-149.229h15.02c.471 8.969 1.786 17.862 3.927 26.529.994 4.021 5.059 6.476 9.08 5.482s6.476-5.059 5.482-9.08c-2.446-9.901-3.686-20.14-3.686-30.431 0-4.142-3.358-7.5-7.5-7.5h-8.452v-114.423c0-9.317 6.575-17.124 15.317-19 5.452 7.93 19.145 25.045 35.77 25.045 17.931 0 32.519-14.609 32.519-32.565s-14.589-32.566-32.52-32.566c-16.513 0-30.133 16.885-35.659 24.883-17.103 1.968-30.429 16.557-30.429 34.204v114.423h-6.548c-4.142 0-7.5 3.358-7.5 7.5 0 92.174 72.861 167.62 163.913 171.567v101.849c0 23.476-19.056 42.574-42.478 42.574s-42.478-19.099-42.478-42.574v-59.112c0-31.746-25.784-57.574-57.478-57.574-29.294 0-53.54 22.065-57.043 50.474-30.869 3.523-54.929 29.847-54.929 61.693 0 34.238 27.811 62.093 61.994 62.093s61.994-27.854 61.994-62.093c0-31.5-23.539-57.596-53.924-61.57 3.331-20.168 20.855-35.598 41.907-35.598 23.422 0 42.478 19.099 42.478 42.574v59.112c0 31.746 25.784 57.574 57.478 57.574s57.478-25.828 57.478-57.574v-101.848c91.053-3.947 163.915-79.392 163.915-171.567zm-80.788-130.879c-9.66 0-17.52-7.88-17.52-17.565s7.86-17.566 17.52-17.566c8.307 0 17.75 10.68 22.714 17.579-5.314 7.395-14.801 17.552-22.714 17.552zm-181.903-35.131c9.66 0 17.519 7.88 17.519 17.565s-7.859 17.565-17.519 17.565c-8.302 0-17.738-10.666-22.705-17.565 4.971-6.903 14.405-17.565 22.705-17.565zm-61.639 434.907c0 25.967-21.082 47.093-46.994 47.093s-46.994-21.126-46.994-47.093c0-25.968 21.082-47.094 46.994-47.094s46.994 21.126 46.994 47.094z"/>
                                </g>
                            </svg>
                            <div>
                                <div className="uppercase text-indigo-700 text-center mt-2 text-3xl font-light">
                                    {vet.name}
                                </div>
                                <div className="px-6 text-center font-light text-md">
                                    <span className="text-indigo-600">
                                        Phone Number:
                                    </span>{' '}
                                    <span className="text-lg">
                                        {vet.dateOfBirth.toString()}
                                    </span>
                                </div>
                                <div className="px-6 text-center font-light text-md">
                                    <span className="text-indigo-600">
                                        Date Of Graduation:
                                    </span>{' '}
                                    <span className="text-lg">{vet.dateOfGraduation.toString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination/>
        </>
    )
}

export default VetList

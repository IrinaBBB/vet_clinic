import { useLocation } from 'react-router-dom'

function ServerError() {
    const { state } = useLocation()

    return (
        <div>
            {state?.error ? (
                <>
                    <div>{state.error.title}</div>
                    <hr />
                    <div>{state.error.detail || 'Internal Server Error'}</div>
                </>
            ) : (
                <div>Server error</div>
            )}
        </div>
    )
}

export default ServerError

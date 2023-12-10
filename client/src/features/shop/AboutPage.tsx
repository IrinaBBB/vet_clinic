import agent from '../../app/api/agent.ts'

function AboutPage() {
    return (
        <button className="bg-gray-200 px-5 py-2 rounded shadow hover:bg-gray-300 hover:shadow-2xl" onClick={() => agent.TestErrors.get500Error()}>
            500 Error
        </button>
    )
}

export default AboutPage

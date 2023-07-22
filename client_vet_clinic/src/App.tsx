import './index.css'

import Navbar from './app/layout/Navbar.tsx'

function App() {
    return (
        <>
            <Navbar />
            <div className="m-10">
                <div className="relative w-[400px] overflow-hidden font-montserrat font-light">
                    <input
                        type="checkbox"
                        name=""
                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                    />
                    <div className="bg-primary h-12 w-full pl-5 flex items-center">
                        <h1 className="text-lg font-semibold text text-white">
                            What is tailwind?
                        </h1>
                    </div>
                    {/*{arrow}*/}
                    <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                    {/*{content}*/}
                    <div className="bg-dimBlue overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-[1000px]">
                        <div className="p-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi debitis ea eligendi et ex illo impedit magni molestiae nisi numquam odio placeat possimus, quas quibusdam suscipit unde? Amet deleniti dolorem odio odit perferendis perspiciatis quia sit tempore voluptatem? At beatae corporis, cumque doloribus, enim eos excepturi harum illo labore maiores modi molestias, nihil odio optio quae quam repellendus! Consequatur corporis dolores illum incidunt ipsam magni nobis non unde vero. Aliquid blanditiis commodi, consectetur consequuntur eum impedit officia possimus quidem saepe vero. Ab accusamus alias dignissimos dolores error ex, fugit impedit inventore ipsa magnam natus nihil provident quaerat suscipit vel?
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur debitis dolorum ducimus labore perferendis ratione, recusandae sint! Deleniti esse eveniet iure nihil numquam obcaecati repellat ullam. Accusamus assumenda cumque dignissimos dolor doloremque doloribus, eligendi explicabo hic inventore, iure labore laboriosam natus nisi nobis, numquam perspiciatis soluta unde vitae voluptas?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

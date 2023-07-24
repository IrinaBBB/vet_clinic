import { arrow } from '../assets'
import { useEffect, useState } from 'react'

function Carousel({
    autoSlide = false,
    autoSlideInterval = 3000,
    slides,
}: {
    autoSlide?: boolean
    autoSlideInterval?: number
    slides: string[]
    width?: number
    height?: number
}) {
    const [current, setCurrent] = useState(0)

    const previous = () =>
        setCurrent((current) =>
            current === 0 ? slides.length - 1 : current - 1,
        )
    const next = () =>
        setCurrent((current) =>
            current === slides.length - 1 ? 0 : current + 1,
        )

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((image) => (
                    <img
                        src={image}
                        alt="image"
                        className={`min-w-[400px] h-[500px] object-cover`}
                    />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={previous}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <img src={arrow} className="w-6" alt="arrow left" />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <img
                        src={arrow}
                        className="rotate-180 w-6"
                        alt="arrow left"
                    />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            className={`
              transition-all w-1 h-1 bg-white rounded-full
              ${current === i ? 'p-1' : 'bg-opacity-50'}
            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel

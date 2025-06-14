import React, { useState } from "react";

const Cards = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const cards = [
        { id: 1, front: <img src="/Test.svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className="h-[662px] w-[487px]" /> },
        { id: 2, front: <img src="/Test (1).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className="h-[662px] w-[487px]" /> },
        { id: 3, front: <img src="/Test (2).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className="h-[662px] w-[487px]" /> },
        { id: 4, front: <img src="/Test (3).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className="h-[662px] w-[487px]" /> },
        { id: 5, front: <img src="/Test (4).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className="h-[662px] w-[487px]" /> },
        { id: 6, front: <img src="/Test (5).svg" className="h-[632px] w-[180px]" />, back: <img src="/ed.svg" className="h-[662px] w-[487px]" /> },
    ];
    const cards2 = [
        { id: 1, front: <img src="/Test.svg" className="h-[632px] w-[180px]" />, back: <img src="/Mobile Tracks.svg" className="h-[662px] w-[487px]" /> },
        { id: 2, front: <img src="/Test (1).svg" className="h-[632px] w-[180px]" />, back: <img src="/Mobile Tracks.svg" className="h-[662px] w-[487px]" /> },
        { id: 3, front: <img src="/Test (2).svg" className="h-[632px] w-[180px]" />, back: <img src="/TEXT.svg" className="h-[662px] w-[487px]" /> },
        { id: 4, front: <img src="/Test (3).svg" className="h-[632px] w-[180px]" />, back: <img src="/Mobile Tracks.svg" className="h-[662px] w-[487px]" /> },
        { id: 5, front: <img src="/Test (4).svg" className="h-[632px] w-[180px]" />, back: <img src="/Mobile Tracks.svg" className="h-[662px] w-[487px]" /> },
        { id: 6, front: <img src="/Test (5).svg" className="h-[632px] w-[180px]" />, back: <img src="/Mobile Tracks.svg" className="h-[662px] w-[487px]" /> },
    ];

    const handleNext = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div id="tracks" className="relative flex flex-col items-center min-h-screen w-screen bg-center text-white z-60">
            <div className="text-center">
                <div className="relative">
                    <span className="absolute z-1 transform -translate-x-1/2 translate-y-2 text-transparent bg-clip-text text-stroke-2 font-ticket text-[120px] font-bold uppercase opacity-50 tracking-wide">
                        TRACKS
                    </span>
                    <span className="absolute z-80 transform -translate-x-1/2 translate-y-22 text-white font-ticket text-6xl font-semibold uppercase tracking-wide">
                        __TRACKS__
                    </span>
                </div>
            </div>
            <div className="hidden sm:flex gap-4 mt-70">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`relative lg:w-[180px] lg:h-[432px] md:w-[130px] md:h-[232px] shadow-lg transition-transform duration-500 transform perspective ${currentCardIndex === index
                            ? "lg:scale-110 md:scale-110 rotate-y-180 lg:w-[387px] h-160 md:w-[200px] "
                            : currentCardIndex !== null
                                ? "lg:scale-80 md:scale-60"
                                : "lg:scale-100 md:scale-90"
                            }`}
                        onMouseEnter={() => setCurrentCardIndex(index)}
                        onMouseLeave={() => setCurrentCardIndex(null)}
                    >
                        <div
                            className={`absolute w-full h-full backface-hidden flex items-center justify-center text-lg font-bold text-gray-800 ${currentCardIndex === index ? "hidden" : "block"
                                }`}
                        >
                            {card.front}
                        </div>
                        <div
                            className={`absolute w-full h-full flex items-center justify-center text-lg font-bold rotate-y-180 ${currentCardIndex === index ? "block" : "hidden"
                                }`}
                        >
                            {card.back}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex sm:hidden flex-col items-center mt-10">
                <div className="relative w-full max-w-[400px] h-auto flex justify-center">
                    {cards2.map((card, index) => (
                        <div
                            key={card.id}
                            className={index === currentCardIndex ? "block w-full" : "hidden"}
                        >
                            <div className="flex justify-center">
                                {card.back}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center w-full max-w-[400px] -mt-32 space-x-8 relative z-50">
                    <button
                        className="text-white p-3 rounded-md hover:scale-110 transition-transform duration-300 active:scale-95"
                        onClick={handlePrev}
                    >
                        <img src="/Arrow (1).svg" className="w-11 h-11" />
                    </button>
                    <button
                        className="text-white p-3 rounded-md hover:scale-110 transition-transform duration-300 active:scale-95"
                        onClick={handleNext}
                    >
                        <img src="/Arrow.svg" className="w-11 h-11" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
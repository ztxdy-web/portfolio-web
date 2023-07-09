import React from 'react'

export default function Carousel2() {
    return (
        <div className="carousel w-full rounded-lg border-2">
            <div id="slidea1" className="carousel-item relative w-full">
                <img src="/coc/jobcoc_0.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slidea5" className="btn btn-circle">❮</a>
                    <a href="#slidea2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slidea2" className="carousel-item relative w-full">
                <img src="/coc/jobcoc_2.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slidea1" className="btn btn-circle">❮</a>
                    <a href="#slidea3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slidea3" className="carousel-item relative w-full">
                <img src="/coc/jobcoc_1.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slidea2" className="btn btn-circle">❮</a>
                    <a href="#slidea4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slidea4" className="carousel-item relative w-full">
                <img src="/coc/jobcoc_3.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slidea3" className="btn btn-circle">❮</a>
                    <a href="#slidea5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slidea5" className="carousel-item relative w-full">
                <img src="/coc/jobcoc_4.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slidea4" className="btn btn-circle">❮</a>
                    <a href="#slidea1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

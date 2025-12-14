import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
    return (
        <main className='main hero-section'>
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a Time.
                    </h1>
                    <p className="paragraph">
                        Dicover the history, culture and beauty of every nation, Sort, Search and filter through countries tofind the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaLongArrowAltRight />
                    </button>
                </div>

                <div className="hero-image">
                    <img className='banner-image' src="/images/world.png" alt="world-img" />
                </div>
            </div>
        </main>
    )
}

export default HeroSection
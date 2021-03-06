import React from 'react'
import About from '../../components/about/about'
import FeaturedGames from '../../components/featured-games/featured-games'
import FeaturedRooms from '../../components/featured-rooms/featured-rooms'
import HeroImage from '../../components/hero-img/hero-img'
import Testimonials from "../../components/testimonials/testimonials"


function HomePage() {
    return (
        <div>
            <HeroImage />
            <About />
            <FeaturedGames />
            <FeaturedRooms />
            <Testimonials />
        </div>
    )
}

export default HomePage

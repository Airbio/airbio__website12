import React from 'react'
import Header from './Header'
import hero1 from '../../assets/images/Hero1.jpg'
import Hero from './Hero'
import Slider from './Slider'
import About from './About'
import Certification from './Certification'
import FAQ from './FAQ'
import Team from './Team.jsx'
import Footer from '../Footer/Footer.jsx'
import CardPost from './CardPost.jsx'
import Applications from './Applications.jsx'
import Products from '../products/Product.jsx'
import Instagram from './Instagram.jsx'
import Assistants from './Assistants.jsx'

const Home = () => {
    return (
        <>
            <div className="w-full relative">
                {/* Hero Section with Background Image */}
                <div
                    className="bg-cover bg-center bg-no-repeat h-screen relative"
                    style={{ backgroundImage: `url(${hero1})` }}
                >
                    {/* For screens md and above */}
                    <div className="hidden md:block z-10">
                        <Header />
                    </div>

                    {/* Mobile background */}
                    <div className="block md:hidden z-10">
                        <Header />
                    </div>
                    <div className="w-full absolute bottom-[54px] right-[200px]">
                        <Hero />
                    </div>
                </div>

                {/* Slider Section */}
                <div className="w-full">
                    <Slider />
                </div>
                <About/>
                <Products/>
                <Certification/>
                <Applications/>
                <Team/>
                <FAQ/>
                <Instagram/>
                <CardPost/>
                <Assistants/>
                <Footer/>

            </div>


        </>

    )
}

export default Home

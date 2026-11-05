import React from 'react'
import MySwiper from '../components/MySwiper'
import Herobir from '../components/Herobir'
import Heroiki from '../components/Heroiki'
import Product from '../components/Product'
import NewsletterSection from '../components/NewsletterSection'
import TestimonialSlider from '../components/TestimonialSlider'
import ApiCard from '../components/ApiCard'

function Home() {
    return (
        <>
            <MySwiper />
            <Herobir />
            <Heroiki />
            <ApiCard />
            <NewsletterSection />
            <TestimonialSlider />
        </>
    )
}

export default Home
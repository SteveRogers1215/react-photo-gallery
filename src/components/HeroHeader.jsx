import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import photo from '../headerphotos/pexels-faik-akmd-1025469.jpg'
import photo2 from '../headerphotos/reign-abarintos--cKXtsJWU-I-unsplash.jpg'
import photo3 from '../headerphotos/pexels-instawalli-169789.jpg'
import '../components/HeroHeader.css'

export default function HeroHeader() {
const [showScrollToTop, setShowScrollToTop] = useState(false);
    
const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
}

const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const scrollThreshold = document.documentElement.scrollHeight - 20;
    
    if (scrollPosition >= scrollThreshold) {
        setShowScrollToTop(true);
    }else {
        setShowScrollToTop(false);
    }
}
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
}, []);

  return (
    <div>
      <Carousel controls={false} fade>
        <Carousel.Item>
            <img src={photo} alt='header pic' className='d-block w-100'/>
        </Carousel.Item>
        <Carousel.Item>
            <img src={photo2} alt='header pic' className='d-block w-100'/>
        </Carousel.Item>
        <Carousel.Item>
            <img src={photo3} alt='header pic' className='d-block w-100'/>
        </Carousel.Item>
      </Carousel>
      <button onClick={scrollToTop} className='scroll-to-top-button'>
        Scroll To Top
      </button>
    </div>
  )
}

import React from 'react'
import Gallery from './Gallery'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import HeroHeader from './HeroHeader';

const photos = [
  { src: "/photos/bath1.jpg", width: 800, height: 600 },
  { src: "/photos/bath2.jpg", width: 1600, height: 900 },
  { src: "/photos/birmingham1.jpg", width: 800, height: 600 },
  { src: "/photos/birmingham2.jpg", width: 1600, height: 900 },
  { src: "/photos/bucharest1.jpg", width: 800, height: 600 },
  { src: "/photos/bucharest2.jpg", width: 1600, height: 900 },
  { src: "/photos/canadawater1.jpg", width: 800, height: 600 },
  { src: "/photos/ely1.jpg", width: 1600, height: 900 },
  { src: "/photos/gothenburg1.jpg", width: 800, height: 600 },
  { src: "/photos/gothenburg2.jpg", width: 1600, height: 900 },
  { src: "/photos/stl1.jpg", width: 800, height: 600 },
  { src: "/photos/stl2.jpg", width: 1600, height: 900 },
  { src: "/photos/tenerife1.jpg", width: 800, height: 600 },
  { src: "/photos/tenerife2.jpg", width: 1600, height: 900 }
]

export default function App() {
  return (
    <>
    <div className="App" style={{backgroundColor:'#263037'}}>
      <Router>
        <Navigation/>
        <HeroHeader/>        
        <Routes>
        <Route path='/' element={<Gallery photos={photos}/>}/>
        </Routes>
        <Footer/>
      </Router>      
    </div>
    </>
  );
}

 

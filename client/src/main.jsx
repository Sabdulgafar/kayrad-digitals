import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './navbar.jsx'
import HeroSection from './hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <HeroSection salute="At Kayrad Digitals" intro="all your professional service just in one place." callToAction="Get Started"/>
    <App />
  </StrictMode>,
)

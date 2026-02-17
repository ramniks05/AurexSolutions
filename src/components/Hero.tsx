import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const HERO_BANNERS = [
  '/hero_banner_1.jpeg',
  '/hero_banner_2.jpeg',
  '/hero_banner_3.jpeg',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_BANNERS.length)
    }, 5000) // Change banner every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-banner">
        {HERO_BANNERS.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={`hero-banner-img ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
        <div className="hero-banner-overlay" aria-hidden />
        <div className="hero-banner-content">
          <h1 className="hero-headline">Modern Spaces. Smart Partitions. Timeless Finish.</h1>
          <p className="hero-tagline">
            Built with Quality. Installed with Precision.<br />
            From Idea to Installation — We're With You.
          </p>
          <Link to="/contact" className="btn-primary hero-cta">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}

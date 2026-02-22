import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const HERO_SLIDES = [
  {
    src: '/hero_banner_1.jpeg',
    headline: 'Modern Spaces. Smart Partitions. Timeless Finish.',
    tagline: 'Built with Quality. Installed with Precision.',
  },
  {
    src: '/hero_banner_2.jpeg',
    headline: 'From Idea to Installation — We\'re With You.',
    tagline: 'Premium aluminium glass solutions for every space.',
  },
  {
    src: '/hero_banner_3.jpeg',
    headline: 'Shower Cubicles. Sliding Doors. Partitions.',
    tagline: 'Economical to super premium—tailored to your project.',
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000) // Change banner every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const slide = HERO_SLIDES[currentIndex]

  return (
    <section className="hero">
      <div className="hero-banner">
        {HERO_SLIDES.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt=""
            className={`hero-banner-img ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
        <div className="hero-banner-overlay" aria-hidden />
        <div className="hero-banner-content">
          <h1 className="hero-headline" key={currentIndex}>{slide.headline}</h1>
          <p className="hero-tagline" key={`tag-${currentIndex}`}>{slide.tagline}</p>
          <Link to="/contact" className="btn-primary hero-cta">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}

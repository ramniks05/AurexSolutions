import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const HERO_BANNER_SRC = '/hero-banner.png'

export default function Hero() {
  const [bannerError, setBannerError] = useState(false)

  return (
    <section className="hero">
      <div className={`hero-banner ${bannerError ? 'hero-banner-placeholder' : ''}`}>
        {!bannerError && (
          <img
            src={HERO_BANNER_SRC}
            alt=""
            className="hero-banner-img"
            onError={() => setBannerError(true)}
          />
        )}
        <div className="hero-banner-overlay" aria-hidden />
        <div className="hero-banner-content">
          <h1 className="hero-headline">Premium Glass & Partition Solutions</h1>
          <p className="hero-tagline">
            From residential to commercial—quality glazing and doors that bring light and space to your project.
          </p>
          <Link to="/contact" className="btn-primary hero-cta">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}

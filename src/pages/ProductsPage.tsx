import { useEffect } from 'react'
import ShowerCubicles from '../components/ShowerCubicles'
import SwingDoors from '../components/SwingDoors'
import InvisiblePocketDoors from '../components/InvisiblePocketDoors'
import TelescopicDoors from '../components/TelescopicDoors'
import SlideAndFoldDoors from '../components/SlideAndFoldDoors'
import SynchroSlidingDoors from '../components/SynchroSlidingDoors'
import MandirPartitions from '../components/MandirPartitions'
import './ProductsPage.css'

export default function ProductsPage() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const scrollToSection = () => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const t = setTimeout(scrollToSection, 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="products-page">
      <div className="products-page-intro section">
        <h1 className="products-page-title">Our Products</h1>
        <p className="products-page-lead">
          Explore our product ranges. Select a category below or use the links from the home page.
        </p>
      </div>
      <ShowerCubicles />
      <SwingDoors imageRight />
      <InvisiblePocketDoors />
      <TelescopicDoors imageRight />
      <SlideAndFoldDoors />
      <SynchroSlidingDoors imageRight />
      <MandirPartitions />
    </main>
  )
}

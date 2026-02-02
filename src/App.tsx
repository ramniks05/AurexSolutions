import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'

const PRELOADER_DURATION_MS = 2200

function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true)
  const [preloaderMounted, setPreloaderMounted] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setPreloaderVisible(false), PRELOADER_DURATION_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <ScrollToTop />
      {preloaderMounted && (
        <Preloader
          visible={preloaderVisible}
          onExitComplete={() => setPreloaderMounted(false)}
        />
      )}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App

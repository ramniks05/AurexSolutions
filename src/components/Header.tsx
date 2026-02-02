import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import './Header.css'

/* Replace with your WhatsApp number (country code, no + or spaces). e.g. 919876543210 */
const WHATSAPP_NUMBER = '919876543210'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [form, setForm] = useState(initialForm)

  const openEnquiry = () => {
    setEnquiryOpen(true)
    setMenuOpen(false)
  }

  const closeEnquiry = () => {
    setEnquiryOpen(false)
    setForm(initialForm)
  }

  useEffect(() => {
    if (!enquiryOpen) return
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeEnquiry()
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [enquiryOpen])

  const handleEnquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = [
      '*Enquiry from Aurex Solutions Website*',
      '',
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      '',
      `*Message:* ${form.message}`,
    ].join('\n')
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    closeEnquiry()
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo" aria-label="Aurex Solutions home">
          <img src="/logo.jpeg" alt="Aurex Solutions" className="header-logo-img" />
        </Link>
        <div className="header-nav-wrap">
          <nav className={`header-nav ${menuOpen ? 'header-nav-open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="header-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="header-enquiry-btn"
            onClick={openEnquiry}
          >
            Enquiry
          </button>
          </nav>
        </div>
        <button
          type="button"
          className="header-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header-menu-icon" />
          <span className="header-menu-icon" />
          <span className="header-menu-icon" />
        </button>
      </div>

      {enquiryOpen && (
        <div
          className="header-enquiry-overlay"
          onClick={closeEnquiry}
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-title"
        >
          <div
            className="header-enquiry-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="header-enquiry-head">
              <h2 id="enquiry-title" className="header-enquiry-title">Send an enquiry</h2>
              <button
                type="button"
                className="header-enquiry-close"
                onClick={closeEnquiry}
                aria-label="Close"
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>
            <form className="header-enquiry-form" onSubmit={handleEnquirySubmit}>
              <label className="header-enquiry-label">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleEnquiryChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="header-enquiry-label">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleEnquiryChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="header-enquiry-label">
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleEnquiryChange}
                  placeholder="+91 98765 43210"
                />
              </label>
              <label className="header-enquiry-label">
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleEnquiryChange}
                  placeholder="How can we help?"
                  rows={4}
                  required
                />
              </label>
              <button type="submit" className="btn-primary header-enquiry-submit">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './ContactPage.css'

/* Temporarily empty – add links when social accounts are ready */
const socialLinks: { label: string; href: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }[] = []

/* Replace with your Google Maps embed URL: Google Maps → Share → Embed a map */
const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268.68885747260754!2d77.03163423869941!3d28.386331985010976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2294448e172d%3A0xa0dcb778c287dcac!2s92PJ%2BGP5%2C%20Sector%2069%2C%20Gurugram%2C%20Haryana%20122101!5e0!3m2!1sen!2sin!4v1772342262272!5m2!1sen!2sin'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit us',
    value: 'Aurex Solutions, Khewat No 895, Khata No 909, Badshahpur, Sector-68, Gurugram, Haryana 122101',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+91-74282 65177',
    href: 'tel:+917428265177',
  },
  {
    icon: Mail,
    label: 'Email us',
    value: 'Info@aurexsolutions.in',
    href: 'mailto:Info@aurexsolutions.in',
  },
]

const WHATSAPP_NUMBER = '917428265177'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return
    }
    
    // Format message for WhatsApp
    const text = [
      '*Contact Form Enquiry from Aurex Solutions Website*',
      '',
      `*Name:* ${formData.name.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      formData.phone.trim() ? `*Phone:* ${formData.phone.trim()}` : '',
      '',
      `*Message:* ${formData.message.trim()}`,
    ]
      .filter(line => line !== '')
      .join('\n')
    
    // Open WhatsApp with pre-filled message
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    
    // Reset form after opening WhatsApp
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className="contact-page">
      <section className="contact-hero section">
        <h1 className={`contact-hero-title ${inView ? 'reveal' : ''}`} ref={ref}>
          Get in touch
        </h1>
        <p className="contact-hero-lead">
          Have a project in mind? Aurex Solutions would’d love to hear from you. Send a message or reach out directly.
        </p>
      </section>

      <section className="contact-main section section-alt">
        <div className="contact-layout">
          <div className="contact-form-wrap">
            <h2 className="contact-form-title">Send a message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-label">
                <span className="contact-label-text">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="contact-label">
                <span className="contact-label-text">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="contact-label">
                <span className="contact-label-text">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="+91 98765 43210"
                />
              </label>
              <label className="contact-label">
                <span className="contact-label-text">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input contact-textarea"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </label>
              <button type="submit" className="btn-primary contact-submit">
                Send message
              </button>
            </form>
          </div>

          <div className="contact-info-wrap">
            <h2 className="contact-info-title">Contact information</h2>
            <ul className="contact-info-list">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <span className="contact-info-icon">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div className="contact-info-content">
                      <span className="contact-info-label">{item.label}</span>
                      <span className="contact-info-value">{item.value}</span>
                    </div>
                  </>
                )
                return (
                  <li key={item.label} className="contact-info-item">
                    {item.href ? (
                      <a href={item.href} className="contact-info-card contact-info-link">
                        {content}
                      </a>
                    ) : (
                      <div className="contact-info-card">
                        {content}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
            {socialLinks.length > 0 && (
              <div className="contact-social">
                <span className="contact-social-label">Connect with us</span>
                <div className="contact-social-icons">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="contact-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon size={22} strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <h2 className="contact-map-title">Find us</h2>
        <div className="contact-map-wrap">
          <iframe
            title="Aurex Solutions location"
            src={MAP_EMBED_URL}
            className="contact-map-iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}

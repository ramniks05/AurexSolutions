import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]

const productLinks = [
  { to: '/products#shower-cubicles', label: 'Shower Cubicles' },
  { to: '/products#swing-doors', label: 'Swing Doors' },
  { to: '/products#invisible-pocket-doors', label: 'Invisible/Pocket Doors' },
  { to: '/products#telescopic-sliding-door', label: 'Telescopic Sliding Doors' },
  { to: '/products#slide-fold-sliding-doors', label: 'Slide & Fold Doors' },
  { to: '/products#synchro-sliding-doors', label: 'Synchro Sliding Doors' },
  { to: '/products#mandir-partitions', label: 'Mandir Partitions' },
]

/* Temporarily empty – add links when social accounts are ready */
const socialLinks: { label: string; href: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }[] = []

const contactInfo = {
  address: 'Aurex Solutions, Khewat No 895, Khata No 909, Badshahpur, Sector-68, Gurugram, Haryana 122101',
  phone: '74282 65177',
  phoneHref: 'tel:+917428265177',
  email: 'Info@aurexsolutions.in',
  emailHref: 'mailto:Info@aurexsolutions.in',
}

/* Replace with your Google Maps embed URL: Google Maps → Share → Embed a map */
const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715774395576!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da8edc39b09816b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!5m2!1sen!2sin'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <Link to="/" className="footer-logo" aria-label="Aurex Solutions home">
              <img src="/logo.jpeg" alt="Aurex Solutions" className="footer-logo-img" />
            </Link>
            <p className="footer-about-text">
              Aurex Solutions is a leading provider of premium aluminium glass solutions including shower cubicles, sliding doors, partitions, and more. 
              Aurex Solutions offers economical to super premium options with various aluminium glass and frame choices.
            </p>
            {socialLinks.length > 0 && (
              <div className="footer-social">
                <span className="footer-social-label">Follow us</span>
                <div className="footer-social-icons">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      className="footer-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="footer-section footer-links">
            <h3 className="footer-section-title">Quick Links</h3>
            <nav className="footer-nav">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-section footer-products">
            <h3 className="footer-section-title">Aurex Solutions Products</h3>
            <nav className="footer-nav">
              {productLinks.map((link) => (
                <Link key={link.to} to={link.to} className="footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-section footer-contact">
            <h3 className="footer-section-title">Contact Us</h3>
            <div className="footer-contact-info">
              <a href={contactInfo.phoneHref} className="footer-contact-item">
                <Phone size={18} strokeWidth={1.75} />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={contactInfo.emailHref} className="footer-contact-item">
                <Mail size={18} strokeWidth={1.75} />
                <span>{contactInfo.email}</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={18} strokeWidth={1.75} />
                <span className="footer-address">{contactInfo.address}</span>
              </div>
            </div>
            <div className="footer-map">
              <iframe
                title="Aurex Solutions location"
                src={MAP_EMBED_URL}
                className="footer-map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Aurex Solutions. All rights reserved. Design and develop by{' '}
            <a
              href="https://www.digitalcreatorss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Digital Creatorss
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

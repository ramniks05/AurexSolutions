import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import './Footer.css'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-social">
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
        <nav className="footer-nav">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} className="footer-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="footer-copy">
          &copy; {year} Aurex Solutions. All rights reserved.{' '}
          Design and develop by{' '}
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
    </footer>
  )
}

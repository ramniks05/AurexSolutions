import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './IndustriesWeServe.css'

import { Home, Building2, Hotel, HeartPulse, ShoppingBag } from 'lucide-react'

const industries = [
  { 
    name: 'Residential', 
    icon: Home, 
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop' 
  },
  { 
    name: 'Commercial', 
    icon: Building2, 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop' 
  },
  { 
    name: 'Hospitality', 
    icon: Hotel, 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop' 
  },
  { 
    name: 'Healthcare', 
    icon: HeartPulse, 
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop' 
  },
  { 
    name: 'Retail', 
    icon: ShoppingBag, 
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' 
  },
]

export default function IndustriesWeServe() {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="industries" className="industries section">
      <h2 className={`section-title industries-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Industries We Serve
      </h2>
      <ul className="industries-grid">
        {industries.map((industry) => {
          const Icon = industry.icon
          return (
            <li key={industry.name} className="industries-item">
              <div className="industries-image-wrap">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="industries-image"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to gradient background if image fails
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="industries-overlay" />
              </div>
              <div className="industries-content">
                <Icon size={24} strokeWidth={1.75} className="industries-icon" />
                <span className="industries-name">{industry.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

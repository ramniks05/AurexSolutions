import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './ProductSection.css'

const products = [
  { title: 'Shower Enclosures', description: 'Premium shower solutions for residential and commercial spaces.' },
  { title: 'Internal Partitions', description: 'Smart sliding and fixed partitions for modern interiors.' },
]

export default function ProductSection() {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section className="product-section section">
      <h2 className={`section-title product-section-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Our Products
      </h2>
      <div className="product-section-grid">
        {products.map((product) => (
          <article key={product.title} className="product-card">
            <h3 className="product-card-title">{product.title}</h3>
            <p className="product-card-text">{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

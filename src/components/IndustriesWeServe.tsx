import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './IndustriesWeServe.css'

const industries = [
  'Residential',
  'Commercial',
  'Hospitality',
  'Healthcare',
  'Retail',
]

export default function IndustriesWeServe() {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="industries" className="industries section">
      <h2 className={`section-title industries-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Industries We Serve
      </h2>
      <ul className="industries-grid">
        {industries.map((name) => (
          <li key={name} className="industries-item">
            <span className="industries-name">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

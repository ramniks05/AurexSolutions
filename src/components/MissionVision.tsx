import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './MissionVision.css'

const blocks = [
  {
    id: 'mission',
    title: 'Our Mission',
    text: 'To deliver premium glass and partition solutions that enhance spaces—from residential to commercial—with quality, reliability, and clear communication at every step.',
  },
  {
    id: 'vision',
    title: 'Our Vision',
    text: 'To be the trusted partner for architects, builders, and homeowners seeking exceptional glazing and partitioning solutions across India and beyond.',
  },
  {
    id: 'values',
    title: 'Our Values',
    text: 'Quality in materials and craftsmanship, integrity in every interaction, and a commitment to understanding and meeting our clients\' needs.',
  },
]

export default function MissionVision() {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="mission-vision" className="mission-vision section section-alt">
      <h2 className={`section-title mission-vision-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Mission, Vision & Values
      </h2>
      <div className="mission-vision-grid">
        {blocks.map((block) => (
          <article key={block.id} className="mission-vision-card">
            <div className="mission-vision-card-content">
              <h3 className="mission-vision-card-title">{block.title}</h3>
              <p className="mission-vision-card-text">{block.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

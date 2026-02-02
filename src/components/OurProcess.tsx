import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './OurProcess.css'

const steps = [
  { num: 1, title: 'Consultation', text: 'We understand your requirements and vision.' },
  { num: 2, title: 'Planning', text: 'A tailored plan and timeline are prepared.' },
  { num: 3, title: 'Execution', text: 'Expert delivery with quality at every stage.' },
  { num: 4, title: 'Handover', text: 'Final review and ongoing support as needed.' },
]

export default function OurProcess() {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="process" className="our-process section">
      <h2 className={`section-title our-process-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Our Process
      </h2>
      <div className="our-process-layout">
        <div className="our-process-text">
          <ol className="our-process-list">
            {steps.map((step) => (
              <li key={step.num} className="our-process-item">
                <span className="our-process-num">{step.num}</span>
                <div>
                  <h3 className="our-process-item-title">{step.title}</h3>
                  <p className="our-process-item-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="our-process-image-wrap">
          <img
            src="/our-process.png"
            alt="Our process: consultation, planning, execution, and handover"
            className="our-process-image"
          />
        </div>
      </div>
    </section>
  )
}

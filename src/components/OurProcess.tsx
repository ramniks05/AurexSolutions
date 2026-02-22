import { useRef, useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './OurProcess.css'

const steps = [
  { num: 1, title: 'Consultation', text: 'Aurex Solutions understands your requirements and vision.' },
  { num: 2, title: 'Planning', text: 'A tailored plan and timeline are prepared.' },
  { num: 3, title: 'Execution', text: 'Expert delivery with quality at every stage.' },
  { num: 4, title: 'Handover', text: 'Final review and ongoing support as needed.' },
]

export default function OurProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const { ref: titleRef, inView } = useScrollAnimation<HTMLHeadingElement>(0.12)
  const [layoutInView, setLayoutInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLayoutInView(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="our-process section" ref={sectionRef}>
      <h2 className={`section-title our-process-title ${inView ? 'reveal' : ''}`} ref={titleRef}>
        Aurex Solutions Process
      </h2>
      <div className={`our-process-layout ${layoutInView ? 'our-process-layout-inview' : ''}`}>
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
          <div className="our-process-image-glow" aria-hidden />
          <img
            src="/our-process.png"
            alt="Aurex Solutions process: consultation, planning, execution, and handover"
            className="our-process-image"
          />
        </div>
      </div>
    </section>
  )
}

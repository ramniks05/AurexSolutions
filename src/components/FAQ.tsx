import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './FAQ.css'

const items = [
  {
    q: 'What services does Aurex Solutions offer?',
    a: 'We provide premium solutions tailored to residential, commercial, and hospitality projects—from planning through to handover and support.',
  },
  {
    q: 'How can I get started?',
    a: 'Reach out via the contact option above. We will arrange a consultation to understand your needs and outline the next steps.',
  },
  {
    q: 'Do you work across different industries?',
    a: 'Yes. We serve residential, commercial, hospitality, and other sectors with the same commitment to quality and reliability.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="faq" className="faq section">
      <h2 className={`section-title faq-title ${inView ? 'reveal' : ''}`} ref={ref}>
        FAQ
      </h2>
      <div className="faq-list">
        {items.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openIndex === i ? 'faq-item-open' : ''}`}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              {item.q}
              <span className="faq-icon" aria-hidden>+</span>
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

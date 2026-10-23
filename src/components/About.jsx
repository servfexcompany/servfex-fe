import React from 'react'

const aboutCards = [
  {
    number: '01 — OUR PURPOSE',
    title: 'Making Life Easier',
    description:
      'Simplifying the process of finding, requesting and coordinating everyday home services through one convenient platform.',
  },
  {
    number: '02 — OUR APPROACH',
    title: 'Connecting Locally',
    description:
      'Creating connections between customers and local service-provider businesses with a focus on accessibility, coordination and clear communication.',
  },
  {
    number: '03 — OUR COMMITMENT',
    title: 'Continuous Improvement',
    description:
      'Building a service experience that values convenience, consistency, responsible operations and customer feedback.',
  },
]

export default function About() {
  return (
    <section id="about" className="section section-about">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="section-label">01 / About Us</div>
            <h2 className="section-title">A simpler way to access services.</h2>
          </div>
          <p className="section-description">
            ServFex aims to make everyday home services easier to discover
            and coordinate. Our platform connects customers with local
            service-provider businesses and is designed to make the
            process of requesting and managing services more convenient.
            We want customers to spend less time managing service needs
            and more time focusing on what matters to them.
          </p>
        </div>

        <div className="about-grid">
          {aboutCards.map((card, idx) => (
            <article key={idx} className="about-card">
              <div className="card-number">{card.number}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

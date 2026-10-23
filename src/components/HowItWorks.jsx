import React from 'react'

const stepsData = [
  {
    step: 'STEP 01',
    title: 'Explore',
    description:
      'Discover the service categories and options available for your needs.',
  },
  {
    step: 'STEP 02',
    title: 'Request',
    description:
      'Share your service requirements and preferred location or schedule.',
  },
  {
    step: 'STEP 03',
    title: 'Coordinate',
    description:
      'Booking coordination connects the request with an appropriate service-provider partner.',
  },
  {
    step: 'STEP 04',
    title: 'Complete',
    description:
      'The service is carried out by the assigned provider, with communication and feedback supporting the customer experience.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section-how-it-works">
      <div className="container">
        <div className="section-label">03 / The ServFex Experience</div>
        <h2 className="section-title">Designed around convenience.</h2>

        <p className="section-description" style={{ marginTop: '16px' }}>
          We are building a structured service journey that helps customers
          connect with service providers and coordinate each step more easily.
        </p>

        <div className="steps-grid">
          {stepsData.map((item, idx) => (
            <article key={idx} className="step-card">
              <div className="step-number">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

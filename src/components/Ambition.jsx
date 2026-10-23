import React from 'react'

const principlesData = [
  {
    number: '01',
    title: 'Convenience for Customers',
    description:
      'A clearer, more organised journey from discovering a service to coordinating a booking.',
  },
  {
    number: '02',
    title: 'Opportunities for Local Providers',
    description:
      'A digital platform designed to help local businesses connect with service demand.',
  },
  {
    number: '03',
    title: 'Consistent Operations',
    description:
      'Structured workflows that support coordination, booking progress and service feedback.',
  },
  {
    number: '04',
    title: 'Responsible Growth',
    description:
      'Developing service categories and geographic coverage as operational capabilities grow.',
  },
]

export default function Ambition() {
  return (
    <section id="ambition" className="section section-ambition">
      <div className="container ambition-layout">
        <div className="ambition-info">
          <div className="section-label">04 / Our Ambition</div>
          <h2 className="section-title">
            Building a better-connected service ecosystem.
          </h2>

          <p className="ambition-description">
            Our ambition is to make local services easier to find and
            coordinate while helping service-provider businesses connect
            with more customers through a structured digital platform.
            We aim to grow thoughtfully, strengthen service coverage and
            develop an experience that can expand across communities over time.
          </p>
        </div>

        <div className="principles-list">
          {principlesData.map((principle, idx) => (
            <div key={idx} className="principle-item">
              <span className="principle-number">{principle.number}</span>
              <div className="principle-content">
                <strong className="principle-title">{principle.title}</strong>
                <p className="principle-desc">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

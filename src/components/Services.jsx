import React from 'react'

const servicesData = [
  {
    icon: '⌂',
    title: 'Home Cleaning',
    description:
      'Deep cleaning for selected home areas, furniture and household items.',
  },
  {
    icon: '◉',
    title: 'Water Tank Cleaning',
    description:
      'Cleaning support for overhead and underground water storage tanks.',
  },
  {
    icon: '⚙',
    title: 'Repairs & Maintenance',
    description:
      'Everyday repair and maintenance needs through relevant service partners.',
  },
  {
    icon: '＋',
    title: 'More Home Services',
    description:
      'A growing range of categories based on customer needs and service coverage.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section section-services">
      <div className="container">
        <div className="section-label">02 / Our Services</div>
        <h2 className="section-title">Everyday needs, one platform.</h2>

        <p className="section-description services-intro">
          ServFex is designed to support a range of household service needs.
          Service categories and availability may vary by location as
          the platform and its service-provider network develop.
        </p>

        <div className="service-grid">
          {servicesData.map((service, idx) => (
            <article key={idx} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

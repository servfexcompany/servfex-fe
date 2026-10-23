import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <div className="contact-banner">
          <div className="contact-copy">
            <h2 className="contact-title">Let's make everyday services easier.</h2>
            <p className="contact-description">
              Have a question, want to discuss a service-provider partnership,
              or want to know more about ServFex? Get in touch with our team.
            </p>
          </div>

          <div className="contact-action">
            <a
              className="btn btn-contact-cta"
              href="mailto:care@servfex.com?subject=ServFex%20Enquiry"
            >
              Contact ServFex &nbsp; ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

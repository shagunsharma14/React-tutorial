import React from 'react'
import './Contacts.css';

function Contact() {
  return (
    <div className='contact'>
    <h1>Contact Us</h1>

    <section class="contact-info">
      <p>
        <span class="label">Address:</span>
        <span class="value">123 Main Street</span>
      </p>
      <p>
        <span class="label">Location:</span>
        <span class="value">United States</span>
      </p>
      <p>
        <span class="label">Telephone:</span>
        <span class="value">555-555-5555</span>
      </p>
      <p>
        <span class="label">Phone:</span>
        <span class="value">555-555-1212</span>
      </p>
      <p>
        <span class="label">Pincode:</span>
        <span class="value">90210</span>
      </p>
    </section>
    </div>
  )
}

export default Contact
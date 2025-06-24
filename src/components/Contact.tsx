import React, { useState, useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

// Please fill in your EmailJS service ID, template ID, and public key below:
const EMAILJS_SERVICE_ID = 'service_l97mruk';
const EMAILJS_TEMPLATE_ID = 'template_tnp2onj';
const EMAILJS_PUBLIC_KEY = 'q75gBBMSjQY2tOkhV';

// Please create or update src/components/Contact.css for styling this form

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    title: 'WEBSITE CONTACT FORM',
    email: '',
    number: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.number || !form.message) {
      setError('Please fill in all required fields.');
      return false;
    }
    // Simple email regex
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        title: form.title,
        name: form.name,
        email: form.email,
        number: form.number,
        company: form.company,
        message: form.message,
      },
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSubmitted(true);
    }, () => {
      setError('There was an error sending your message. Please try again later.');
    });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        window.location.href = '/';
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  if (submitted) {
    return (
      <section className="contact">
        <h1>Contact</h1>
        <p>Thank you for your enquiry! We'll be in touch soon.</p>
      </section>
    );
  }

  return (
    <section className="contact">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number*</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={form.number}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company (optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Enquiry*</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </div>
        {error && <div className="form-error">{error}</div>}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default Contact; 
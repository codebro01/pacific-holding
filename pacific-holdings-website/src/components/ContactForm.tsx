'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isSubmitted && (
        <div className={styles.successMessage}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Thank you! We&apos;ll be in touch soon.</span>
        </div>
      )}
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder=" "
            required
          />
          <label htmlFor="name" className={styles.label}>Your Name</label>
          <div className={styles.inputHighlight}></div>
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder=" "
            required
          />
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <div className={styles.inputHighlight}></div>
        </div>
      </div>

      <div className={styles.formGroup}>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={styles.input}
          placeholder=" "
        />
        <label htmlFor="company" className={styles.label}>Company (Optional)</label>
        <div className={styles.inputHighlight}></div>
      </div>

      <div className={styles.formGroup}>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${styles.input} ${styles.textarea}`}
          placeholder=" "
          rows={4}
          required
        />
        <label htmlFor="message" className={styles.label}>Your Message</label>
        <div className={styles.inputHighlight}></div>
      </div>

      <button 
        type="submit" 
        className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className={styles.spinner}></span>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

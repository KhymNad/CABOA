import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={formData.phone}
                onChange={handleChange}
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <button type="submit">Send Message</button>
        </form>
    );
}

export default ContactForm;

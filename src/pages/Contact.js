import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import "../styles/ContactForm.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    console.log('EmailJS env:', {
      service: SERVICE_ID ? 'OK' : undefined,
      template: TEMPLATE_ID ? 'OK' : undefined,
      publicKey: PUBLIC_KEY ? 'OK' : undefined,
    });
    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      console.error('EmailJS configuration missing.');
      return;
    }
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      setError('Konfiguracja usługi email nieukończona.');
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSubmitted(true);
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="contact-container">
        <h1>KONTAKT</h1>
        <div className="contact-content">
          <div className="contact-form-section">
            <h3>Wyślij nam wiadomość, a my skontaktujemy się z Tobą najszybciej jak to możliwe!</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <label>
                Imię:
                <input type="text" name="from_name" required />
              </label>
              <label>
                Email:
                <input type="email" name="from_email" required />
              </label>
              <label>
                Wiadomość:
                <textarea name="message" required></textarea>
              </label>
              {submitted && <p className="success-message">✓ Wiadomość wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.</p>}
              {error && <p className="error-message">✗ {error}</p>}
              <button type="submit" disabled={loading}>{loading ? "Wysyłanie..." : "WYŚLIJ"}</button>
              <p className="privacy-notice">Klikając wyślij akceptujesz naszą <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">politykę prywatności</a>.</p>
            </form>
          </div>
          <aside className="contact-info-section">
            <h2>PPHU RUDNAR</h2>
            <p><strong>Paulina Oliwa</strong></p>
            <p>ul. Jana Dobrego 26</p>
            <p>41-700 Ruda Śląska</p>
            <p className="contact-phone">📞 <a href="tel:514227369">514 227 369</a></p>
            <p className="contact-email">✉️ <a href="mailto:oliwapaula@gmail.com">oliwapaula@gmail.com</a></p>
          </aside>
        </div>
      </main>
    </>
  );
};

export default Contact;

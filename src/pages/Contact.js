import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/ContactForm.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };
  return (
    <>
      <Header />
      <main className="contact-container">
        <h1>KONTAKT</h1>
        <h3>
          Wyślij nam wiadomość, a my skontaktujemy się z Tobą najszybciej jak to
          możliwe!
        </h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Imię:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Wiadomość:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">WYŚLIJ</button>
        </form>
      </main>
    </>
  );
};

export default Contact;

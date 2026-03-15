import { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [status, setStatus] = useState(""); // To show success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    axios
      .post("https://694267a669b12460f3110f02.mockapi.io/PORTFOLIO", formData)
      .then(() => {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", msg: "" });
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        setStatus("Error sending message ❌");
      });
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="msg"
            value={formData.msg}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
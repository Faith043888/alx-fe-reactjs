import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: 'Faith Charisma Kalamshe',
    email: 'magagulachari@gmail.com',
    message: 'Hello, I am Faith Charisma Kalamshe. Please feel free to reach out regarding technology consulting, market analysis, or product development services.'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been received.`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>
      <p>You can also reach me directly at: <a href="mailto:magagulachari@gmail.com">magagulachari@gmail.com</a></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '5px', width: '300px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '5px', width: '300px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '5px', width: '300px', height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

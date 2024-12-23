import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>Email: <a href="mailto:anudeepgoudchirra@gmail.com">anudeepgoudchirra@gmail.com</a></p>
          <p>Phone: <a href="tel:+917993939264">+91 7993939264</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/anudeepgoud-chirra-626460312/" target="_blank" rel="noreferrer">View Profile</a></p>
          <p>GitHub: <a href="https://github.com/chirraanudeep" target="_blank" rel="noreferrer">View Profile</a></p>
        </div>
      </div>
    </section>
  );
}

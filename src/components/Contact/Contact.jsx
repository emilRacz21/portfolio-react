import { contact } from "../../CONTENT";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        {contact.map((item, index) => (
          <div key={index} className="contact-item">
            <img src={item.img} alt={item.alt} className="contact-image" />
            <div className="contact-details">
              <h2 className="contact-title">{item.title}</h2>
              <a href={item.href} className="contact-link">
                {item.desc}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

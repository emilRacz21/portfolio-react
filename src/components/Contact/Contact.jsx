import { contact } from "../../CONTENT";
import Form from "./Form";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-forms">
        <div className="contact-grid">
          <h2>Kontakt</h2>
          <p>
            Aby nawiązać kontakt, proszę wypełnij formularz, a ja skontaktuję
            się z Tobą tak szybko, jak to możliwe. Możesz także skorzystać z
            jednej z poniższych opcji kontaktowych.
          </p>
          {contact.map((item, index) => (
            <div key={index} className="contact-item">
              <img src={item.img} alt={item.alt} className="contact-image" />
              <div className="contact-details">
                <h3 className="contact-title">{item.title}</h3>
                <a href={item.href} className="contact-link">
                  {item.desc}
                </a>
              </div>
            </div>
          ))}
        </div>
        <Form />
      </div>
    </section>
  );
}

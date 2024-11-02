import { contact } from "../CONTENT";
export default function Contact() {
  return (
    <section id="section-5">
      <div id="grid-section-5">
        {contact.map((items, index) => {
          return (
            <div key={index} className="contact">
              <img src={items.img} alt={items.alt} />
              <div>
                <h2>{items.title}</h2>
                <a href={items.href}>{items.desc}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

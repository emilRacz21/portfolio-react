import { projects, projectTitle } from "../../CONTENT";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="section-6">
      <h2>Moje projekty</h2>
      <p className="project-title">{projectTitle}</p>
      {projects.map((item, index) => (
        <div key={index} className="project-container">
          <div className="project-text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="project-buttons">
              <button
                onClick={() => window.open(item.live)}
                className="project-btn-live"
              >
                Zobacz teraz
              </button>
              <button
                onClick={() =>
                  window.open(`https://github.com/emilRacz21/${item.source}`)
                }
                className="project-btn-source-code"
              >
                Kod źródłowy
              </button>
            </div>
          </div>
          <div className="img-project">
            <img src={item.img} alt={item.alt} />
          </div>
        </div>
      ))}
    </section>
  );
}

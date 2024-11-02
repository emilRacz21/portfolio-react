import { projects, projectTitle } from "../CONTENT";
export default function Projects() {
  return (
    <section className="active1" id="section-6">
      <h2>Moje projekty</h2>
      <p className="proj">{projectTitle}</p>
      {projects.map((item, index) => {
        return (
          <div key={index} className="section-6-projects">
            <div className="project-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="section-6-btn">
                <button
                  onClick={() => window.open(item.live)}
                  id="section-6-btn-live"
                >
                  Zobacz teraz
                </button>
                <button
                  onClick={() =>
                    window.open(`https://github.com/emilRacz21/${item.source}`)
                  }
                  id="section-6-btn-source-code"
                >
                  Kod źródłowy
                </button>
              </div>
            </div>
            <div id="img-project">
              <img src={item.img} alt={item.alt} />
            </div>
          </div>
        );
      })}
    </section>
  );
}

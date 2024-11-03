import { interests } from "../../CONTENT";
import "./Interests.scss";

export default function Interests() {
  return (
    <section className="interests-section" id="section-4">
      <h2>{interests.name}</h2>
      <div className="interests-grid">
        {interests.thema.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <h2>{interests.anotherInterests}</h2>
      <div className="interests-grid">
        {interests.anotherThema.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
}

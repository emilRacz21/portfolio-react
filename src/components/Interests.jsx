import { interests } from "../CONTENT";
export default function Interests() {
  return (
    <section className="section" id="section-4">
      <h2>{interests.name}</h2>
      <div className="grid-4">
        {interests.thema.map((items, index) => (
          <p key={index}>{items}</p>
        ))}
      </div>
      <h2>{interests.anotherInterests}</h2>
      <div className="grid-4">
        {interests.anotherThema.map((items, index) => (
          <p key={index}>{items}</p>
        ))}
      </div>
    </section>
  );
}

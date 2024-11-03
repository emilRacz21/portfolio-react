import myPhoto from "../../assets/my photo/PHOTO.png";
import "./Author.scss";
import { authorSection } from "../../CONTENT";

export default function Author() {
  return (
    <section className="author-section">
      <div className="author-info">
        <h1>{authorSection.title}</h1>
        <p>{authorSection.about}</p>
      </div>
      <img src={myPhoto} alt="Author" className="author-photo" />
    </section>
  );
}

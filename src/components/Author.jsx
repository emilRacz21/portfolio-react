import myPhoto from "../assets/my photo/PHOTO.png";
import { authorSection } from "../CONTENT";
export default function Author() {
  return (
    <section className="section" id="section-1">
      <div id="grid-1-section-1">
        <h1>{authorSection.title}</h1>
        <p>{authorSection.about}</p>
      </div>
      <img src={myPhoto} alt={myPhoto.alt} id="my-photo" />
    </section>
  );
}

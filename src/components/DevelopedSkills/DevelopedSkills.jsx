/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { developedSkills } from "../../CONTENT";
import "./DevelopedSkills.scss";

export default function DevelopedSkills() {
  const skillRefs = useRef([]);
  const [hasCheckedVisibility, setHasCheckedVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasCheckedVisibility) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillRefs.current.forEach((skill) => {
              skill.classList.add("visible");
            });
            setHasCheckedVisibility(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    skillRefs.current.forEach((skill) => {
      if (skill) {
        observer.observe(skill);
      }
    });

    return () => {
      skillRefs.current.forEach((skill) => {
        if (skill) {
          observer.unobserve(skill);
        }
      });
      observer.disconnect();
    };
  }, [hasCheckedVisibility]);

  return (
    <section className="developed-skills-section">
      <h2>Umiejętności, które rozwijam</h2>
      <p>
        Nieustannie rozwijam swoje pasje i umiejętności, aby osiągać nowe cele.
      </p>
      <div className="skills-grid">
        {developedSkills.map((item, index) => (
          <div
            key={index}
            className="skill-item"
            ref={(el) => (skillRefs.current[index] = el)}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <img src={item.img} alt={item.alt} className="skills-image" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

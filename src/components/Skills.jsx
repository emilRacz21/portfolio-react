/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { skillsSection } from "../CONTENT";

export default function Skills() {
  const skillRefs = useRef([]);
  const [hasCheckedVisibility, setHasCheckedVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasCheckedVisibility) return;

        const isAnyVisible = entries.some((entry) => entry.isIntersecting);

        if (isAnyVisible) {
          skillRefs.current.forEach((skill) => {
            if (skill) {
              skill.classList.add("visible");
            }
          });
          setHasCheckedVisibility(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
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
    <section className="section" id="section-2">
      <h2>Moje umiejętności</h2>
      <p className="skills-text-p">
        Narzędzia i Technologie, których Używam w swoich projektach i nie tylko.
      </p>
      <div id="grid-2">
        {skillsSection.map((items, key) => {
          return (
            <div
              key={key}
              className="skills-grid-2"
              ref={(el) => (skillRefs.current[key] = el)}
              style={{
                transitionDelay: `${key * 100}ms`,
              }}
            >
              <img src={items.img} alt={items.alt} />
              <p>{items.about}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

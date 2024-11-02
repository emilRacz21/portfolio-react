/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { developedSkills } from "../CONTENT";

export default function DevelopedSkills() {
  const skillRefs = useRef([]);
  const [hasCheckedVisibility, setHasCheckedVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasCheckedVisibility) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setHasCheckedVisibility(true);
            observer.disconnect();
          } else {
            entry.target.classList.remove("visible");
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
    <section className="section" id="section-3">
      <h2>Umiejętności, które rozwijam</h2>
      <p>
        Nieustannie rozwijam swoje pasje i umiejętności, aby osiągać nowe cele.
      </p>
      <div id="grid-3-section-3">
        {developedSkills.map((items, index) => {
          return (
            <div
              key={index}
              className="grid-3-div"
              ref={(el) => (skillRefs.current[index] = el)}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <img src={items.img} alt={items.alt} className="skills-learn" />
              <p>{items.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

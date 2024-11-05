import { developedSkills } from "../../CONTENT";
import "./DevelopedSkills.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const DevelopedSkills = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  const updateSliderSettings = () => {
    if (window.innerWidth < 1000) {
      setSliderSettings({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    } else {
      setSliderSettings({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 3,
      });
    }
  };

  useEffect(() => {
    updateSliderSettings();
    window.addEventListener("resize", updateSliderSettings);
    return () => {
      window.removeEventListener("resize", updateSliderSettings);
    };
  }, []);

  return (
    <section className="developed-skills-section">
      <h2>Umiejętności, które rozwijam</h2>
      <p>
        Nieustannie rozwijam swoje pasje i umiejętności, aby osiągać nowe cele.
      </p>
      <div className="skills-slider">
        <Slider {...sliderSettings}>
          {developedSkills.map((item, index) => (
            <div key={index} className="skill-item">
              <img src={item.img} alt={item.alt} className="skills-image" />
              <p>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DevelopedSkills;

import { header } from "../CONTENT";
import { useEffect, useState } from "react";

export default function Header({ onSelect, selectedSection }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [menuExiting, setMenuExiting] = useState(false);

  function handleMenu() {
    if (menuActive) {
      setMenuExiting(true);
      setTimeout(() => {
        setMenuActive(false);
        setMenuExiting(false);
      }, 300);
    } else {
      setMenuActive(true);
    }
  }

  function handleSelectButton(event) {
    onSelect(event);
    setMenuExiting(true);
    setTimeout(() => {
      setMenuActive(false);
      setMenuExiting(false);
    }, 500);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsHidden(currentScroll > scrollPosition);
      setScrollPosition(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuActive]);

  return (
    <header
      style={{
        transform: isHidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.3s ease",
      }}
    >
      <button id="logo-btn">
        <img
          src={header.img}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          alt={header.alt}
          id="my-logo"
        />
      </button>
      <ul
        className={`ul-about-me ${menuActive ? "active" : ""} ${
          menuExiting ? "exiting" : ""
        }`}
      >
        {header.buttons.map((items, index) => (
          <button
            id={items === "Pobierz CV" ? "button-cv" : undefined}
            key={index}
            onClick={handleSelectButton}
            className="btn-menu"
            value={index}
            style={{
              fontWeight: selectedSection == index ? 400 : 200,
              transform: selectedSection == index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s ease, font-weight 0.2s ease",
            }}
          >
            {items}
          </button>
        ))}
      </ul>
      <div id="mobile-burger" onClick={handleMenu}>
        <span
          className={`burger-open burger-line-0 ${menuActive ? "active" : ""}`}
        ></span>
        <span
          className={`burger-open burger-line-1 ${menuActive ? "active" : ""}`}
        ></span>
        <span
          className={`burger-open burger-line-2 ${menuActive ? "active" : ""}`}
        ></span>
      </div>
    </header>
  );
}

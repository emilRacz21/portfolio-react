import { useState } from "react";
import Author from "./components/Author";
import DevelopedSkills from "./components/DevelopedSkills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const components = (
  <>
    <Author />
    <Skills />
    <DevelopedSkills />
    <Interests />
  </>
);

function App() {
  const [page, setPage] = useState(components);
  const [fade, setFade] = useState(false);
  const [selectedSection, setSelectedSection] = useState(0); // Stan dla aktualnie wybranej sekcji

  const pages = {
    0: components,
    1: <Projects />,
    2: <Contact />,
  };

  function handleButtons(event) {
    const value = event.target.value;
    setFade(true);
    setTimeout(() => {
      smoothScroll();
      if (value === "3") {
        window.open("https://gofile.io/d/x7i5B7");
      } else {
        setSelectedSection(value); // Aktualizacja wybranej sekcji
        setPage(pages[value] || components);
      }

      setFade(false);
    }, 300);
  }

  function smoothScroll() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <>
      <Header onSelect={handleButtons} selectedSection={selectedSection} />
      <main className={fade ? "fade-out" : "fade-in"}>{page}</main>
      <Footer />
    </>
  );
}

export default App;

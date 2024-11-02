import logo from "../src/assets/logo/LOGO_BROWN.png";

export const header = {
  img: logo,
  alt: "Logo strony w nagłówku strony",
  buttons: ["Start", "Projekty", "Kontakt", "Pobierz CV"],
};

export const authorSection = {
  title: "Witam cię na mojej stronie!",
  about: `Nazywam się Emil i od zawsze fascynowała mnie możliwość łączenia kreatywności z
            technologią, tworząc interaktywne i intuicyjne aplikacje. Pracuję
            głównie z HTML, CSS i JavaScript, budując estetyczne, funkcjonalne i
            responsywne strony internetowe. Uwielbiam tworzyć od podstaw,
            zamieniając pomysły w działające projekty.
            Aktualnie uczę się Reacta, aby rozwijać swoje umiejętności w
            tworzeniu dynamicznych i skalowalnych aplikacji. Dzięki temu
            frameworkowi mogę realizować coraz bardziej zaawansowane projekty,
            ciągle poszerzając swoją wiedzę.`,
  alt: "zdjęcie autora strony internetowej powiększające się powoli i zmniejszające się",
};

import htmlLhoto from "../src/assets/skills/HTML.png";
import cssLhoto from "../src/assets/skills/CSS.png";
import jsLogo from "../src/assets/skills/JS.png";
import javaLogo from "../src/assets/skills/JAVA.png";
import pythonLogo from "../src/assets/skills/PYTHON.png";
import cLogo from "../src/assets/skills/C.png";

export const skillsSection = [
  {
    img: htmlLhoto,
    alt: "Obraz przedstawiający logo HTML",
    about: `HTML (HyperText Markup Language) to podstawowy język służący do
            tworzenia stron internetowych. Określa strukturę treści na stronie
            za pomocą znaczników (tagów), takich jak h1 dla nagłówków, p dla
            akapitów, czy a dla linków. HTML pozwala osadzać obrazy, wideo oraz
            inne media i łączyć strony ze sobą za pomocą hiperłączy. Każdy
            dokument HTML zaczyna się od deklaracji !DOCTYPE html, a jego główna
            struktura składa się z elementów head i body.`,
  },
  {
    img: cssLhoto,
    alt: "Obraz przedstawiający logo CSS",
    about: `CSS (Cascading Style Sheets) to język używany do opisywania wyglądu
            i formatu dokumentów HTML. Umożliwia oddzielenie treści od
            prezentacji, co sprawia, że strona internetowa jest bardziej
            przejrzysta i łatwiejsza w utrzymaniu. CSS pozwala na kontrolowanie
            stylów elementów, takich jak kolory, czcionki, rozmiary, marginesy i
            układ. Dzięki właściwościom responsywnym, takim jak media queries,
            strony mogą dostosowywać się do różnych urządzeń i rozmiarów
            ekranów.`,
  },
  {
    img: jsLogo,
    alt: "Obraz przedstawiający logo języka JavaScript",
    about: `JavaScript (JS) to język programowania, który umożliwia tworzenie
            interaktywnych elementów na stronach internetowych. Jest jednym z
            kluczowych składników nowoczesnego rozwoju webowego, obok HTML i
            CSS. JS pozwala na manipulację strukturą dokumentu (DOM), co
            umożliwia dynamiczne zmiany treści i stylów na stronie w odpowiedzi
            na działania użytkowników. Język ten jest także wszechstronny,
            działając zarówno po stronie klienta, jak i serwera, co czyni go
            idealnym do budowy aplikacji webowych.`,
  },
  {
    img: javaLogo,
    alt: "Obraz przedstawiający logo języka Java",
    about: `Java to wieloplatformowy język programowania, który został stworzony
            przez firmę Sun Microsystems w 1995 roku, a obecnie jest rozwijany
            przez Oracle. Jego główną cechą jest niezależność od platformy, co
            oznacza, że napisany w Javie kod może działać na różnych systemach
            operacyjnych dzięki maszynie wirtualnej (Java Virtual Machine, JVM).
            Java jest często używana do tworzenia aplikacji internetowych,
            systemów korporacyjnych i aplikacji mobilnych na platformę Android.`,
  },
  {
    img: pythonLogo,
    alt: "Obraz przedstawiający logo języka Python",
    about: `Python to interpretowany, dynamiczny język programowania o prostym i
            czytelnym składniowo kodzie, stworzony przez Guido van Rossuma w
            1991 roku. Jego wszechstronność sprawia, że jest używany w różnych
            dziedzinach, takich jak analiza danych, sztuczna inteligencja, web
            development czy automatyzacja zadań. Python kładzie duży nacisk na
            czytelność kodu i produktywność, co czyni go popularnym zarówno
            wśród początkujących, jak i zaawansowanych programistów.`,
  },
  {
    img: cLogo,
    alt: "Obraz przedstawiający logo języka C",
    about: `C to kompilowany, proceduralny język programowania, stworzony w
            latach 70. przez Dennisa Ritchie w Bell Labs, głównie z myślą o
            systemie operacyjnym Unix. Jest znany ze swojej wydajności oraz
            niskopoziomowego dostępu do pamięci, co sprawia, że jest używany do
            tworzenia systemów operacyjnych, kompilatorów i aplikacji o wysokich
            wymaganiach wydajnościowych. Język C stał się podstawą dla wielu
            nowoczesnych języków programowania, takich jak C++, C# czy Java.`,
  },
];

import reactLogo from "../src/assets/learn/REACT.png";
import androidLogo from "../src/assets/learn/ANDROID.png";
import windowsLogo from "../src/assets/learn/WINDOWS.png";

export const developedSkills = [
  {
    img: reactLogo,
    alt: "Obraz przedstawiający logo języka React",
    name: "React",
  },
  {
    img: androidLogo,
    alt: "Obraz przedstawiający logo Android Studio",
    name: "Android Studio w Java",
  },
  {
    img: windowsLogo,
    alt: "Obraz przedstawiający logo Windows Server",
    name: "Windows Server",
  },
];
export const interests = {
  name: "Zainteresowania",
  thema: [
    "Jazda na rowerze",
    "Podróże",
    "Informatyka",
    "Sztuczna inteligencja",
    "Naprawa sprzętu komputerowego",
    "Front End",
    "Kryptowaluty",
    "Programowanie",
    "Cyberbezpieczeństwo",
    "Nauka nowych języków programowania",
  ],
  anotherInterests: "Inne",
  anotherThema: [
    "Język ojczysty: Polski",
    "Poziom Języka Angielskiego: B2",
    "Poziom Języka Niemieckiego: B1",
    "Posiadane wykształcenie: Wyższe",
    "Posiadany tytuł: Licencjat",
    "Kierunek studiów: Informatyka",
    "Nazwa ukończonej uczelni: Akademia Zamojska",
  ],
};

import logoWheat from "../src/assets/logo/LOGO_WHEAT.png";

export const footer = {
  img: logoWheat,
  alt: "Logo strony w stopce strony",
  name: "Emil Raczkiewicz",
  address: "Rzeszów",
  num: "kod pocztowy: 35-000",
  view: "Szybki podgląd",
  about: "O mnie",
  myProj: "Moje projekty",
  contact: "Kontakt",
  phone: "+48 506 318 498",
  mail: "emil.raczkiewicz@gmail.com",
};

import contactLogo from "../src/assets/icons/CONTACT.png";
import phonetLogo from "../src/assets/icons/PHONE.png";
import mailLogo from "../src/assets/icons/MAIL.png";
import gitHubLogo from "../src/assets/icons/GITHUB.png";

export const contact = [
  {
    img: contactLogo,
    alt: "ikonka kontaktu",
    title: "Imie i nazwisko",
    desc: "Emil Raczkiewicz",
    href: "tel:506318498",
  },
  {
    img: phonetLogo,
    alt: "ikonka telefonu",
    title: "Telefon",
    desc: "+48 506 318 498",
    href: "tel:506318498",
  },
  {
    img: mailLogo,
    alt: "ikonka e-mail",
    title: "Adres e-mail",
    desc: "emil.raczkiewicz@gmail.com",
    href: "mailto:emil.raczkiewicz@gmail.com",
  },
  {
    img: gitHubLogo,
    alt: "ikonka GitHub",
    title: "GitHub",
    desc: "Emil Raczkiewicz",
    href: "https://github.com/emilRacz21?tab=repositories",
  },
];

import instagramProject from "../src/assets/projects/INSTAGRAM.png";
import quizProject from "../src/assets/projects/QUIZ.png";
import gameProject from "../src/assets/projects/2D-Game.png";
import calcProject from "../src/assets/projects/CALCULATOR.png";
import ticTacToeProject from "../src/assets/projects/TICTACTOE.png";
import tanksProject from "../src/assets/projects/TANKS.png";

export const projectTitle = `Wykonane aplikacje webowe wykorzystują technologie JavaScript, React, HTML i CSS, i nie tylko.`;
export const projects = [
  {
    title: "Projekt Instagram",
    desc: ` Stworzyłem aplikację typu infinite scroll, inspirowaną Instagramem,
          która korzysta z API Pixabay do pobierania zdjęć. Dzięki temu API
          mogę łatwo i szybko uzyskiwać dostęp do dużej bazy zdjęć o
          różnorodnych tematach, takich jak natura, architektura czy ludzie.
          Aplikacja umożliwia mi przeglądanie zdjęć, a nowe posty ładują się
          automatycznie, gdy zbliżam się do końca dostępnych treści, co
          sprawia, że przeglądanie staje się płynne i wygodne. W aplikacji
          znajduje się także sekcja z historiami, gdzie mogę zobaczyć
          miniaturki użytkowników, co dodaje element społecznościowy.`,
    alt: "Zdjęcie z moją wersją instagram",
    img: instagramProject,
    live: "https://instaike-scroll-er.netlify.app/",
    source: "instagram-javascript",
  },
  {
    title: "Gra w Quiz",
    desc: `Stworzyłem interaktywny quiz w języku JavaScript, który zawiera
            różnorodne pytania dotyczące wiedzy ogólnej. Umożliwia graczom
            udzielanie odpowiedzi na pytania wielokrotnego wyboru, a po
            zakończeniu quizu wyświetla wyniki oraz ocenę na podstawie liczby
            poprawnych odpowiedzi. W quizie zastosowałem mechanizm losowania
            pytań, co sprawia, że każda rozgrywka jest inna i angażująca.
            Dodatkowo, wprowadziłem odliczanie czasu, aby zwiększyć napięcie i
            dynamikę zabawy. Moim celem było stworzenie nie tylko edukacyjnego
            narzędzia, ale także rozrywkowego doświadczenia, które zachęca do
            rywalizacji i samodoskonalenia.`,
    alt: "Zdjęcie z aktywną grą w quiz",
    img: quizProject,
    live: "https://quiz-game-er.netlify.app/",
    source: "quiz-javascript",
  },
  {
    title: "Gra w 2D",
    desc: ` Stworzyłem grę, w której gracz steruje postacią poruszającą się w
            lewo i w prawo, zbierając punkty, unikając przeszkód i walcząc z
            blobami. Gra wykorzystuje animacje oraz różnorodne tła, co nadaje
            jej dynamiczny wygląd. Wprowadziłem system energii, który spada w
            miarę gry, oraz mechanikę poziomów, w której liczba blobów rośnie z
            każdym poziomem. Poziom trudności rośnie, a gracz może wygrać lub
            przegrać w zależności od zdobytych punktów i energii. Całość jest
            zaprojektowana z myślą o intuicyjnej obsłudze oraz przyjemnej
            estetyce wizualnej.`,
    alt: "Zdjęcie z grą 2D",
    img: gameProject,
    live: "https://github.com/emilRacz21/Blob-runner",
    source: "Blob-runner",
  },
  {
    title: "Kalkulator",
    desc: ` Stworzyłem interaktywny kalkulator, który obsługuje podstawowe
            operacje matematyczne, w tym dodawanie, odejmowanie, mnożenie i
            dzielenie. Użytkownicy mogą wprowadzać liczby, korzystać z procentów
            oraz przeglądać historię obliczeń, która jest na bieżąco
            aktualizowana. Kalkulator umożliwia również usuwanie ostatnich
            znaków oraz wyświetla komunikaty o błędach, na przykład w przypadku
            dzielenia przez zero. Zastosowane techniki programowania sprawiają,
            że aplikacja jest responsywna i łatwa w użyciu na różnych
            urządzeniach.`,
    alt: "Zdjęcie z kalkulatorem",
    img: calcProject,
    live: "https://calculator-project-er.netlify.app/",
    source: "calculator-javascript",
  },
  {
    title: "Gra w kółko i krzyżyk",
    desc: `Stworzyłem interaktywną grę w kółko i krzyżyk dla dwóch graczy, z
            dynamiczną zmianą kolorów i animacjami zależnymi od aktualnego
            gracza. Logika sprawdzania zwycięzcy oparta jest na predefiniowanych
            kombinacjach, a po wygranej lub remisie plansza automatycznie się
            resetuje. System punktacji jest aktualizowany na bieżąco, a
            interfejs reaguje na ruchy graczy poprzez animacje i zmiany kolorów`,
    alt: "Zdjęcie z grą kółko i krzyżyk",
    img: ticTacToeProject,
    live: "https://tic-tac-toe-er.netlify.app/",
    source: "ticTacToe-javascript",
  },
  {
    title: "Gra w Statki",
    desc: `Stworzyłem interaktywną grę planszową w JavaScript, która symuluje
            bitwę morską z dwoma poziomami trudności: łatwym i średnim. Gra
            wykorzystuje DOM do dynamicznego tworzenia planszy, a także
            obsługuje zdarzenia kliknięć, które pozwalają graczowi odkrywać pola
            i zdobywać punkty. Dźwięki i animacje poprawiają immersję, a punkty
            są przyznawane lub odejmowane w zależności od trafienia w statek.
            Implementacja obejmuje losowanie rozstawienia statków, oraz
            mechanizm sprawdzania zwycięstwa.`,
    alt: "Zdjęcie z grą w statki",
    img: tanksProject,
    live: "https://tanks-er.netlify.app/",
    source: "tanks-javascript",
  },
];

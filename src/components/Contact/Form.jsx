import { useState } from "react";
import "./Form.scss";

let submitText = <p style={{ color: "white", marginTop: 0 }}>.</p>;
export default function Form() {
  const [text, setText] = useState(submitText);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxD5e9tm9_YiKpYUqHNr8_ErzeLkFFNpQ7_uiZIMVK8OTKKPeob3FumvlMRNLcItu_S/exec",
      {
        method: "POST",
        body: formDatab,
      }
    ).then(() => {
      console.log("sss");

      setTimeout(() => setText(submitText), 5000);
      setText(
        <p style={{ color: "green", marginTop: 0 }}>Wysłano wiadomość!</p>
      );
    });
  }
  return (
    <form name="form" onSubmit={(e) => Submit(e)}>
      <h2>Formularz</h2>

      <p>
        <label htmlFor="name">Imię i nazwisko</label> <br />
        <input type="text" name="Name" required />
      </p>
      <p>
        <label htmlFor="email">Adres e-mail</label> <br />
        <input type="email" name="Email" required />
      </p>
      <p>
        <label htmlFor="message">Twoja wiadmość</label> <br />
        <textarea name="Message" required></textarea>
      </p>
      <p>
        <button type="submit">Wyślij Teraz</button>
      </p>
      {text}
    </form>
  );
}

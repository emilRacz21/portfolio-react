import { useState } from "react";
import "./Form.scss";

let submitText = <p style={{ color: "white", marginTop: 0 }}>.</p>;

const inputObject = {
  name: "",
  email: "",
  message: "",
};

export default function Form() {
  const [text, setText] = useState(submitText);
  const [clearInput, setClearInput] = useState(inputObject);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      `https://script.google.com/macros/s/${
        import.meta.env.VITE_FORM_KEY
      }/exec`,
      {
        method: "POST",
        body: formDatab,
      }
    ).then(() => {
      setClearInput(inputObject);
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
        <input
          type="text"
          value={clearInput.name}
          onChange={(e) =>
            setClearInput((prev) => {
              return { ...prev, ["name"]: e.target.value };
            })
          }
          name="Name"
          required
        />
      </p>
      <p>
        <label htmlFor="email">Adres e-mail</label> <br />
        <input
          type="email"
          value={clearInput.email}
          onChange={(e) =>
            setClearInput((prev) => {
              return { ...prev, ["email"]: e.target.value };
            })
          }
          name="Email"
          required
        />
      </p>
      <p>
        <label htmlFor="message">Twoja wiadmość</label> <br />
        <textarea
          name="Message"
          value={clearInput.message}
          onChange={(e) =>
            setClearInput((prev) => {
              return { ...prev, ["message"]: e.target.value };
            })
          }
          required
        ></textarea>
      </p>
      <p>
        <button type="submit">Wyślij Teraz</button>
      </p>
      {text}
    </form>
  );
}

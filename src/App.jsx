import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [receptor, setReceptor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura los datos que deseas enviar
    const templateParams = {
      from_name: name,
      // Podemos establecer un email genérico para la empresa
      from_email: email,
      to_email: receptor,
      message: message,
    };
    console.log(templateParams);

    // Envía el correo electrónico usando EmailJS
    emailjs
      .send(
        //Name of service
        "service_7xqp5z2",
        //Name of yout email template
        "template_3eg5waq",
        templateParams,
        //Public key
        "XIreciqPFJ28s1Sk5"
      )
      .then(
        (response) => {
          console.log("Correo electrónico enviado con éxito!", response);
        },
        (error) => {
          console.error("Error al enviar el correo electrónico", error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico remitente"
      />
      <input
        type="email"
        value={receptor}
        onChange={(e) => setReceptor(e.target.value)}
        placeholder="Correo electrónico destinatario"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mensaje"
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

function App() {
  return (
    <>
      <ContactForm />
    </>
  );
}

export default App;

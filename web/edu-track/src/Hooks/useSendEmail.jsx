import emailjs from "emailjs-com";
import React, { useEffect } from "react";

export default function useSendEmail(
  email = "flavioprdragon@gmail.com",
  situation
) {
  useEffect(() => {
    if (!situation) {
      sendEmail();
    }
  }, [situation]);

  // Função para enviar e-mail
  const sendEmail = () => {
    const templateParams = {
      // Defina os parâmetros do seu e-mail aqui, como destinatário, assunto, etc.
      // Aqui está um exemplo simples:
      to_email: email,
      subject: "Situação falsa detectada",
      message: 'A propriedade "situation" está definida como false.',
    };

    // Use o serviço de e-mail que preferir (por exemplo, EmailJS)
    emailjs
      .send(
        "service_09wibc8",
        "template_zb5ojf4",
        templateParams,
        "6hvvhvtnYTRnk5_Or"
      )
      .then(
        (response) => {
          console.log("E-mail enviado com sucesso!", response);
        },
        (error) => {
          console.error("Erro ao enviar e-mail:", error);
        }
      );
  };

  return (
    <div>{/* Aqui você pode renderizar o restante do seu componente */}</div>
  );
}

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/:email", async (req, res) => {
  try {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
      to: `${req.params.email}`,
      from: "flavioporfirio86@gmail.com",
      subject: "Aviso de reprovação",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>Caro aluno, você excedeu o limite de faltas e por isso está reprovado! Até o próximo semestre.</strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(3001, () => {
  console.log("Listening on http://localhost:3001");
});

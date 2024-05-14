import cors from "cors";
import express from "express";
import { Resend } from "resend";

const resend = new Resend("re_TFUZtq2t_9Wt7MS1QmEGwri7EYWE2Sq56");
const app = express();
app.use(cors());

app.get("/:email", async (req, res) => {
  try {
    console.log(req.params.email);
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [`${req.params.email}`],
      subject: "Hello World",
      html: "<strong>it works!</strong>",
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(3001, () => {
  console.log("Listening on http://localhost:3001");
});

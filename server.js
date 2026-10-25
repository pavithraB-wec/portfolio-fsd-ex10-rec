
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

app.post("/contact", async (req, res) => {
  const {name, email, message} = req.body;
  if (![name, email, message].every(v =>
      typeof v === "string" && v.trim()))
    return res.status(400).send("Please fill all fields.");

  try {
    await mailer.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Portfolio message from ${name.trim()}`,
      text: message.trim()
    });
    res.send("Message sent successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Email failed. Please try again.");
  }
});

app.listen(process.env.PORT || 3000,
  () => console.log("http://localhost:3000"));
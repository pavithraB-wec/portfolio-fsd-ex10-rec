# Pavithra B | Portfolio

A responsive personal portfolio website for Pavithra B, built with HTML, CSS, and JavaScript and served by a small Express.js application. The contact form submits messages to the configured email address using Nodemailer and Gmail.

## Features

- Introduction, about, skills, projects, experience, education, and contact sections
- Responsive layout for mobile and desktop
- Contact form with server-side required-field validation
- Email delivery through Gmail using Nodemailer

## Requirements

- Node.js and npm
- A Gmail account configured for SMTP access. Use a Google App Password for `MAIL_PASS` when two-step verification is enabled; do not use your regular account password.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   MAIL_USER=your-email@gmail.com
   MAIL_PASS=your-google-app-password
   PORT=3000
   ```

   `PORT` is optional and defaults to `3000`. Keep `.env` private and do not commit real credentials.

3. Start the server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact form

The browser sends form data to `POST /contact` as JSON. The Express server validates that the name, email, and message are non-empty, then emails the message to `MAIL_USER`; the submitted email address is set as the reply-to address.

## Project structure

```text
.
├── public/
│   ├── index.html   # Portfolio content
│   ├── script.js    # Contact form submission
│   └── style.css    # Page styles and responsive layout
├── server.js        # Express server and contact email endpoint
├── package.json
└── .env             # Local email credentials and optional port (not for sharing)
```

// pages/api/send-email.js
import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, budget, message } = req.body

    const content = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Budget: ${budget}
      Message: ${message}
    `

    const mail = {
      to: "your-email@example.com", // Replace with your email address
      from: "noreply@example.com", // Replace with a valid email address registered with SendGrid
      subject: `New message from ${name}`,
      text: content,
    }

    try {
      await sgMail.send(mail)
      res.status(200).json({ message: "Email sent successfully!" })
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ message: "An error occurred. Please try again later." })
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}

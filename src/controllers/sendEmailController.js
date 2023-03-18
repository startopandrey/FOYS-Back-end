const nodemailer = require("nodemailer");
const sendEmail = async (req, res) => {
  const message = req.body;
  console.log(message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "foyb.development@gmail.com",
      pass: "dwstcvocneuzifts",
    },
  });

  if (message) {
    try {
      const emailOptions = {
        from: "andrey01test@gmail.com",
        to: "focusonyoursoftware@gmail.com",
        subject: "NEW PROJECT HAVE BEEN SUBMITED, WAKE UP, BRO ;)",
        html: `<p>Name:${message.name}, Email: ${message.email}, Company: ${message.company}, Message: ${message.message} </p>`,
      };

      const data = await transporter.sendMail(emailOptions);
      if (data) {
       return res.status(200).json({
          status: "SUCCESS",
          message: "Email Has Been Sent",
          data,
        });
      } else {
        return  res.status(400);
      }
    } catch (error) {
        return  res.status(400);
    }
  }
  return res.status(200).json({ message: message });
};

module.exports = { sendEmail };

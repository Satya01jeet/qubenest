const nodemailer = require('nodemailer');
const UserCall = require("../models/callbackRequest");
const UserVisit = require("../models/visitRequest");

const callbackReq = async (req, res) => {
  console.log("Incoming request body:", req.body);

  const { name, number, email } = req.body;

  if (!name || !number || !email) {
    return res
      .status(400)
      .json({ message: "All fields are required: name, number, email" });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'qubenest.booking@gmail.com',
      pass: 'fjjmjspnchreaneo',
    }
  })

  const mailOptions = {
    from: 'qubenest.booking@gmail.com',
    to: 'qubenest.booking@gmail.com',
    subject: 'New callback request',
    text: `You have a new callback request from name: ${name}, number: ${number} and email: ${email}`
  }

  try {
    const newUser = new UserCall({
      name,
      number,
      email,
    });

    const savedDetail = await newUser.save();
    console.log("User details saved to MongoDB:", savedDetail);
    
    await transporter.sendMail(mailOptions);
    res
      .status(201)
      .json({ message: "Form submitted and email sent successfully.", data: savedDetail });
  } catch (error) {
    console.error("Error saving user details:", error.message);
    res
      .status(500)
      .json({ message: "Error saving details", error: error.message });
  }
};

const visitReq = async (req, res) => {
  console.log("Incoming request body:", req.body);

  const { name, number, date } = req.body;

  if (!name || !number || !date) {
    return res
      .status(400)
      .json({ message: "All fields are required: name, number, date" });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'qubenest.booking@gmail.com',
      pass: 'fjjmjspnchreaneo',
    }
  })

  const mailOptions = {
    from: 'qubenest.booking@gmail.com',
    to: 'qubenest.booking@gmail.com',
    subject: 'New visit request',
    text: `You have a new visit request from name: ${name}, number: ${number} on  date: ${date}`,
  }

  try {
    const newUser = new UserVisit({
      name,
      number,
      date,
    });

    const savedDetail = await newUser.save();
    console.log("User details saved to MongoDB:", savedDetail);

    await transporter.sendMail(mailOptions);
    res
      .status(201)
      .json({ message: "User details saved successfully!", data: savedDetail });
  } catch (error) {
    console.error("Error saving user details:", error.message);
    res
      .status(500)
      .json({ message: "Error saving details", error: error.message });
  }
};

module.exports = { callbackReq, visitReq };

const User = require("../models/callbackRequest");

const callbackReq = async (req, res) => {
  console.log("Incoming request body:", req.body);

  const { name, number, email } = req.body;

  if (!name || !number || !email) {
    return res
      .status(400)
      .json({ message: "All fields are required: name, number, email" });
  }

  try {
    const newUser = new User({
      name,
      number,
      email,
    });

    const savedDetail = await newUser.save();
    console.log("User details saved to MongoDB:", savedDetail);
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

module.exports = { callbackReq };

const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id:{//user id is for the user who is creating the contact
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone number"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);

const mongoose = require('mongoose');
const url ="mongodb+srv://manojkumar:manoj123@cluster0.qcrnj2y.mongodb.net/librayapp"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const authSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const authData = mongoose.model("authDetails", authSchema);

module.exports = authData;

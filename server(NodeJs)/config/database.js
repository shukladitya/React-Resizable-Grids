const mongoose = require("mongoose");
const connection = mongoose.createConnection(process.env.MONGODB_URL);

const boxSchema = new mongoose.Schema({
  boxId: Number,
  text: String,
  color: String,
  url: String,
  nUpdate: Number,
});

const NewBox = connection.model("Box", boxSchema);

module.exports = connection;

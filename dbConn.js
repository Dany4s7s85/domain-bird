const mongoose = require("mongoose");

const DB ="mongodb://domainbird03:domainbird70085@cluster0-shard-00-00.wpk3j.mongodb.net:27017,cluster0-shard-00-01.wpk3j.mongodb.net:27017,cluster0-shard-00-02.wpk3j.mongodb.net:27017/domainbird?ssl=true&replicaSet=atlas-jm92kl-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema for mongodb
const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
  accountActive: {
    type: Boolean,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  siturl: {
    type: String,
  },
  clients: {
    type: Number,
  },
});

const user = mongoose.model("user", UserSchema);

module.exports = user;


// mongodb Link = "mongodb://domainbird03:domainbird70085@cluster0-shard-00-00.wpk3j.mongodb.net:27017,cluster0-shard-00-01.wpk3j.mongodb.net:27017,cluster0-shard-00-02.wpk3j.mongodb.net:27017/domainbird?ssl=true&replicaSet=atlas-jm92kl-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoose = require("mongoose")
const uri = "mongodb+srv://daniel:212121@ecommerce.pwulk.mongodb.net/cornerCaseTech?retryWrites=true&w=majority"

const connectDB = async () => {
  //to protect database URI we could use .env file
  try {
    await mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
}

module.exports = connectDB;
import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    // Connect to MongoDB using the URL from your .env file
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;

import mongoose, { MongooseOptions } from "mongoose";

const ConnectDb = async () => {
  try {
    const connection = mongoose.connect(
      process.env.DriveMongoDB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );

    console.log("connected to database");
  } catch (error) {
    console.log("issue connection to database");
  }
};

export default ConnectDb;

import mongoose from 'mongoose';

/**
 * Initiate connection to database
 */
export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.DriveMongoDB);

    console.log('connected to database');
  } catch (error) {
    console.log(error.message);
  }
};

export default ConnectDb;

import mongoose from 'mongoose';

/**
 * Initiate connection to database
 */
export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.DriveMongoDB);

    console.log('connected to database');
  } catch (error) {
    console.log('Connection failed: Connection error');
  }
};

export default ConnectDb;

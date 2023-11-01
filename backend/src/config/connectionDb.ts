import mongoose from 'mongoose';

/**
 * Initiate connection to database
 */
export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DriveMongoDB + '/users');
    console.log('connected to database');
  } catch (error) {
    throw new Error(error.message);
  }
};

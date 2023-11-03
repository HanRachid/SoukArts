import mongoose from 'mongoose';

/**
 * Initiate connection to database
 */
export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DriveMongoDB);
    console.log('connected to database');
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Disconnect current database session
 */
export const disconnectDb = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log('disconnected from database');
  } catch (error) {
    throw new Error(error.message);
  }
};

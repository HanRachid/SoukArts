import mongoose from 'mongoose';

/**
 * Initiate connection to database
 */
export const connectToDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DriveMongoDB, {
      dbName: process.env.MondoDataBase,
    });
    console.log('connected to database');
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Disconnect current database session
 */
export const disconnectFromDB = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log('disconnected from database');
  } catch (error) {
    throw new Error(error.message);
  }
};

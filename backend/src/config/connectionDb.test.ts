import {it, vi, expect, describe, beforeAll} from 'vitest';
import {ConnectDb} from './connectionDb';
import mongoose from 'mongoose';

beforeAll(() => {
  console.log = vi.fn();
  ConnectDb();
});
describe('ConnectDb', () => {
  // Connects to the database successfully
  it('should connect to the database successfully', async () => {
    // Mock the mongoose.connect function to return a resolved promise
    const mockConnect = vi.spyOn(mongoose, 'connect');
    mockConnect.mockResolvedValueOnce(mongoose);

    // Call the ConnectDb function
    await ConnectDb();

    // Expect the mongoose.connect function to be called with the correct arguments
    expect(mockConnect).toHaveBeenCalledWith(process.env.DriveMongoDB);

    // Expect the console.log function to be called with the correct message
    expect(console.log).toHaveBeenCalledWith('connected to database');
  });

  // Logs a message indicating a successful connection
  it('should log a message indicating a successful connection', async () => {
    // Mock the mongoose.connect function to return a resolved promise
    const mockConnect = vi.spyOn(mongoose, 'connect');
    mockConnect.mockResolvedValueOnce(mongoose);

    // Call the ConnectDb function

    // Expect the console.log function to be called with the correct message
    expect(console.log).toHaveBeenCalledWith('connected to database');
  });

  // Fails to connect to the database
  it('should fail to connect to the database', async () => {
    // Mock the mongoose.connect function to return a rejected promise
    const mockConnect = vi.spyOn(mongoose, 'connect');
    mockConnect.mockRejectedValueOnce(mongoose);

    // Call the ConnectDb function
    await ConnectDb();
    // Expect the console.log function to be called with the correct message
    expect(console.log).toHaveBeenCalledWith(
      'Connection failed: Connection error'
    );
  });

  // Logs a message indicating a failed connection
  it('should log a message indicating a failed connection', async () => {
    // Mock the console.log function to capture the logged message
    const consoleLogMock = vi.spyOn(console, 'log');
    consoleLogMock.mockImplementation(() => {});

    // Mock the mongoose.connect function to return a rejected promise
    const mockConnect = vi.spyOn(mongoose, 'connect');
    mockConnect.mockRejectedValueOnce(new Error('Connection error'));

    // Call the connectToDatabase function
    await ConnectDb();

    // Expect the console.log function to be called with the correct message
    expect(console.log).toHaveBeenCalledWith(
      'Connection failed: Connection error'
    );

    // Clean up the mocks
    consoleLogMock.mockRestore();
    mockConnect.mockRestore();
  });

  // Handles invalid database credentials
  it('should handle invalid database credentials', async () => {
    // Mock the mongoose.connect function to throw an error with specific message
    const mockConnect = vi.spyOn(mongoose, 'connect');
    mockConnect.mockImplementationOnce(() => {
      throw new Error('Invalid database credentials');
    });

    // Call the ConnectDb function
    await ConnectDb();

    // Expect the console.log function to be called with the correct message
    expect(console.log).toHaveBeenCalledWith(
      'Connection failed: Connection error'
    );
  });

  // Handles invalid database URL
  it('should handle invalid database URL', async () => {
    // Mock the mongoose.connect function to throw an error with specific message
    const mockConnect = vi.spyOn(mongoose, 'connect');
    mockConnect.mockImplementationOnce(() => {
      throw new Error('Invalid database URL');
    });

    // Call the ConnectDb function
    await ConnectDb();

    // Expect the console.log function to be called with the correct message
    expect(console.log).toHaveBeenCalledWith(
      'Connection failed: Connection error'
    );
  });
});

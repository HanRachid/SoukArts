import {it, vi, expect, describe, beforeAll, beforeEach} from 'vitest';
import {ConnectDb} from '../../src/config/connectionDb';
import mongoose from 'mongoose';
require('dotenv').config();
const mockConnect = vi.spyOn(mongoose, 'connect');
const mockLog = vi.spyOn(console, 'log');
describe('ConnectDb', () => {
  beforeEach(() => {
    mockConnect.mockClear();
    mockLog.mockClear();
  });
  it('should connect to database using env ', async () => {
    mockConnect.mockResolvedValueOnce(mongoose);
    await ConnectDb();
    expect(mockConnect).toHaveBeenCalledWith(process.env.DriveMongoDB);
  });

  it('should connect and log a succesful log message', async () => {
    mockConnect.mockResolvedValueOnce(mongoose);
    await ConnectDb();
    expect(mockLog).toHaveBeenCalledWith('connected to database');
  });

  // ConnectDb should throw an error when the database connection fails.

  it('should throw an error when connection fails', async () => {
    mockConnect.mockRejectedValueOnce(new Error('Connection Error'));
    await expect(ConnectDb()).rejects.toThrow(new Error('Connection Error'));
  });

  it('should not connect to database when env variable is missing', async () => {
    process.env.DriveMongoDB = undefined;
    await expect(ConnectDb()).rejects.toThrowError(
      'Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"'
    );
  });
});

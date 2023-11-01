import {describe, it, expect, beforeAll, vi, afterAll} from 'vitest';
import UserModel from '../../src/models/UserModel';
import {connectDb, disconnectDb} from '../../src/config/connectionDb';
import mongoose from 'mongoose';
require('dotenv').config();

describe('UserModel', () => {
  // Calling saveModel() on a new UserModel object should save the object to the database.
  beforeAll(async () => {
    await connectDb();
  });

  it('should save the object to the database when calling saveModel() on a new UserModel object', async () => {
    // Arrange
    const userModel = new UserModel('John', 'Doe', 'Male', 'Admin');
    const mockSave = vi.spyOn(userModel, 'saveModel');
    // Act
    await userModel.saveModel();
    // Assert
    expect(mockSave).toHaveBeenCalled();
    expect(userModel._id).not.toBeNull();
    userModel.removeModel();
  });
});

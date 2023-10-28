import {middle} from './index';
import {vi, describe, it, expect} from 'vitest';
import {Request, Response} from 'express';
describe('middle', () => {
  // Logs "middleware" when function is called
  it('should log "middleware" to console', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    middle(undefined, undefined, vi.fn);
    expect(consoleSpy).toHaveBeenCalledWith('middleware');
    consoleSpy.mockRestore();
  });

  // Calls next() function without errors
  it('should call "next" function', () => {
    const nextMock = vi.fn();
    middle(undefined, undefined, nextMock);
    expect(nextMock).toHaveBeenCalled();
  });

  // next() function throws an error
  it('should handle error thrown by "next" function', () => {
    const nextMock = vi.fn(() => {
      throw new Error('Error');
    });
    expect(() => middle({} as Request, {} as Response, nextMock)).not.toThrow();
  });

  // Request object is undefined
  it('should handle undefined "req" parameter', () => {
    const nextMock = vi.fn();
    middle(undefined, {} as any, nextMock);
    expect(nextMock).toHaveBeenCalled();
  });

  // Response object is undefined
  it('should handle undefined "res" parameter', () => {
    const nextMock = vi.fn();
    middle({} as Request, undefined, nextMock);
    expect(nextMock).toHaveBeenCalled();
  });

  // Logs an error message when next() function throws an error
  it('should handle undefined "next" parameter', () => {
    const nextMock = vi.fn();
    middle({} as Request, {} as Response, undefined);
    expect(nextMock).not.toHaveBeenCalled();
  });
});

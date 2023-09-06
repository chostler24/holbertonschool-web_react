// Import the functions to be tested
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test suite for getFullYear function
describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

// Test suite for getFooterCopy function
describe('getFooterCopy', () => {
  it('should return "Holberton School" when isIndex is true', () => {
    const isIndex = true;
    expect(getFooterCopy(isIndex)).toEqual('Holberton School');
  });

  it('should return "Holberton School main dashboard" when isIndex is false', () => {
    const isIndex = false;
    expect(getFooterCopy(isIndex)).toEqual('Holberton School main dashboard');
  });
});

// Test suite for getLatestNotification function
describe('getLatestNotification', () => {
  it('should return a string containing "<strong>Urgent requirement</strong> - complete by EOD"', () => {
    const notification = getLatestNotification();
    expect(notification).toContain('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

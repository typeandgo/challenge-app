import { isValidUrl } from './isValidUrl';

describe('isValidUrl', () => {
  test('Returns `true` when input is a valid url', () => {
    const input = 'https://www.google.com';
    const result = isValidUrl(input);
  
    expect(result).toBe(true);
  });
  
  test('Returns `false` when input is an invalid url', () => {
    const input = 'www.google.com';
    const result = isValidUrl(input);
  
    expect(result).toBe(false);
  });
});


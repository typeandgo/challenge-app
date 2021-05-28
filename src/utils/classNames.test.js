import { classNames } from './classNames';

describe('classNames', () => {
  
  test('Returns a valid string names separated with space when given valid input object', () => {
    const input = {
      lorem: true,
      ipsum: true,
      dolor: false
    };
    const expectedResult = 'lorem ipsum'

    const result = classNames(input);
  
    expect(result).toEqual(expectedResult);
  });

  test('Returns an empty string when given valid input object', () => {
    const input = {
      lorem: false,
      ipsum: false,
      dolor: false
    };
    const expectedResult = ''

    const result = classNames(input);
  
    expect(result).toEqual(expectedResult);
  });
});

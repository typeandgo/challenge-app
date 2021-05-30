/* eslint-disable no-useless-escape */
export const isValidUrl = url => {
  const expression = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
  const regex = new RegExp(expression);

  return regex.test(url);
}

/* eslint-disable no-useless-escape */
export const isValidUrl = url => {
  var expression = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
  var regex = new RegExp(expression);

  return regex.test(url);
}

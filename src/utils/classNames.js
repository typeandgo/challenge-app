export const classNames = obj => {
  
  let classNames = '';

  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      classNames = classNames.length > 0 ? classNames + ' ' + key : key;
    }
  });
  
  return classNames;
};

export const truthy = value => Boolean(value) === true;

export const get = path => (object = {}) => {
  const value = object[path[0]];
  if (path.length === 1) return value;
  return get(path.slice(1))(value);
};

export const getElementPosition = element =>
  element.getBoundingClientRect().top + window.scrollY;

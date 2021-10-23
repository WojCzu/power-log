export const setLocalStorage = (key, value, timeInMilliseconds = null) => {
  const now = new Date();

  const item = {
    value,
    expiry:
      timeInMilliseconds !== null ? now.getTime() + timeInMilliseconds : null,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  const { value, expiry } = JSON.parse(item);

  if (expiry === null) return value;

  const now = new Date();
  if (now.getTime() > expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return value;
};

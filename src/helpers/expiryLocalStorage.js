export const setLocalStorage = (key, value, timeInMilliseconds) => {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + timeInMilliseconds,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  const { value, expiry } = JSON.parse(item);
  const now = new Date();
  if (now.getTime() > expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return value;
};

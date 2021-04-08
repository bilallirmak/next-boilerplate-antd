export const set = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, value);
  }
};

export const remove = key => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const get = (key) => {
  return localStorage.getItem(key)
};

export const clear = () => {
  localStorage.clear()

}



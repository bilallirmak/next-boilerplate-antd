import cookie from 'js-cookie';

export const set = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      // expires: 1,
      path: '/',
    });
  }
};

export const remove = key => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const get = (key) => {
  return getCookieFromBrowser(key)
};

export const clear = () => {
  throw new Error('Not Implemented!')
}

const getCookieFromBrowser = key => {
  return cookie.get(key);
};

// const getCookieFromServer = (key, req) => {
//   if (!req.headers.cookie) {
//     return undefined;
//   }
//   const rawCookie = req.headers.cookie
//     .split(';')
//     .find(c => c.trim().startsWith(`${key}=`));
//   if (!rawCookie) {
//     return undefined;
//   }
//   return rawCookie.split('=')[1];
// };



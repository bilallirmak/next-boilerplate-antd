import axios from 'axios';

const _http = axios;

class BaseAPI {
  _getHttpClient = () => {
    return _http;
  };

  get = (url, params = null, headers = null) => {
    return _http.get(url, {params, headers});
  };

  post = (url, body = null, headers = null) => {
    return _http.post(url, body, {headers});
  };

  put = (url, body = null, headers = null) => {
    return _http.put(url, body, {headers});
  };

  patch = (url, body = null, headers = null) => {
    return _http.patch(url, body, {headers});
  };

  delete = (url, params = null, headers = null) => {
    return _http.delete(url, {params, headers});
  };
}

const http = new BaseAPI();
export default http;

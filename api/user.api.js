import { apiEndpoint } from "../core/url";
import http from "../core/base.api";

class UserAPI {
  async verifySession() {

    return await http
      .get(`${apiEndpoint}/auth/verify-session`)
      .then((res) => res.data);
  };

}

export default new UserAPI();

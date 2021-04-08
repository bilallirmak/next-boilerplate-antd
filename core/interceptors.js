import http from "./base.api";
import {getAuthHeader} from "../helpers/authorization";

const axiosInterceptors = http._getHttpClient().interceptors;

axiosInterceptors.request.use(async function (config) {
  const [, header] = await getAuthHeader().toArray()

  console.log(header, "HEADERRR")

  config.headers = header


  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


axiosInterceptors.response.use(
  (response) => {

    return response.data;
  },
  (error) => {

    const errorObj = {
      status: error.response.status,
      statusText: error.response.statusText,
      message: error.message,
      data: error.response.data,
      error: null,
    };

    // Interceptor Helpers
    // if (errorMessage === "wrong_token") {
    //   UserStore.logout();
    // } else {
    //   message.error(i18n.t(errorMessage));
    // }

    // errorObj.error = ErrorFormatter(errorObj);

    // // Error Interceptors
    // Authentication(errorObj);

    return Promise.reject(errorObj);
  }
);

const ErrorFormatter = (error) => {
  let errorMessage = "";

  const errorData = error.data.message;

  if (errorData) {
    errorMessage = errorData;
  }

  return errorMessage;
};

// const Authentication = ({error}) => {
//   if (error === 'ERROR.USER_NOT_FOUND') {
//     RootNavigation.goBack();
//     UserStore.verifySession().then();
//     SnackbarStore.closeSnack();
//     SnackbarStore.openSnack('Tekrar Giriş Yapmanız Gerekiyor');
//   }
// };

const interceptors = axiosInterceptors;
export default interceptors;

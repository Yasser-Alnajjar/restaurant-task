export const axiosErrorHandler = (error) => {
  // Error 😨
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    return error.response.data;
  }
  if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    return {
      statusCode: error.request.status,
      status: 'failed',
      message: error.request.statusText,
      data: null,
    };
  }
  // Something happened in setting up the request and triggered an Error
  return {
    statusCode: error.request.status,
    status: 'failed',
    message: error.message,
    data: null,
  };
};
export default axiosErrorHandler;

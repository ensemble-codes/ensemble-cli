import axios from 'axios';

export const errorHandler = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Error response data:', error.response.data);
      console.log('Error response status:', error.response.status);
      // console.log('Error response headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error message:', error.message);
    }
    // console.log('Error config:', error.config);
  } else {
    // If the error is not an AxiosError
    console.error('Unexpected error:', error);
  }
}

axios.interceptors.request.use(request => {
  console.log(`Starting ${request.method?.toUpperCase()} Request - ${request.url} ${request.data ? 'with body: ' + JSON.stringify(request.data, null, 2) : ''}`)
  return request
})

axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${process.env.JWT}`
  return config;
});
    
// axios.interceptors.response.use(response => {
//   console.log('Response:', JSON.stringify(response, null, 2))
//   return response
// })

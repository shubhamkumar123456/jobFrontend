// Response interceptor to handle errors
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         // Token expired or unauthorized
//         alert('Token expired. Please login again.');
//         localStorage.removeItem('authToken'); // Clear expired token
//         window.location.href = '/login'; // Redirect to login page
//       }
//       return Promise.reject(error);
//     }
//   );
  
//   export default api;
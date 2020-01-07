import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://foodie-fun-be.herokuapp.com/',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `${token}`
    }
  })
}

export default axiosWithAuth;

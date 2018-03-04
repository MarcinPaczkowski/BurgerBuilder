import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-49289.firebaseio.com/'
});

export default instance;

import Axios from 'axios';

const Api = Axios.create({
  baseURL: `${process.env.REACT_APP_URL_APP_API}`,
});

export default Api;

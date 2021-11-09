import axios from 'axios';
import globalServer from '../global-server';

const Http = {
  get(url) {
    return axios
      .get(globalServer + url)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        if (err.response) {
          return err;
        }
      });
  },
  post(url, params) {
    return axios.post(globalServer + url, params);
  },
  initOptions() {

  }
}
export default Http

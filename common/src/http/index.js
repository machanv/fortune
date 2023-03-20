import axios from 'axios';
import globalServer from '../global-server';

const Http = {
  get(url) {
    return axios
      .get(globalServer + url)
      .then((result) => result.data)
      .catch((err) => {
        if (err.response) {
          return err;
        }
      });
  },
  post(url, body) {
    return axios.post(globalServer + url);
  },
  initOptions() {},
};

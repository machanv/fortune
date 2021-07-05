import axios from "axios";
// import Vue from 'vue';

let http = {};
http.getData = function (url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    })
  })
}
http.postData = function (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    })
  })
}

http.install = function (Vue) {
  Vue.prototype.$http = http;
  Vue.$http = http;
}
export default http;

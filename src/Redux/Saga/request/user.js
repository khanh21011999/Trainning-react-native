import axios from 'axios';

export function requestGetUser() {
  return axios.request({
    method: 'get',
    url: 'https://my-json-server.typicode.com/khanh21011999/demo/user',
  });
}

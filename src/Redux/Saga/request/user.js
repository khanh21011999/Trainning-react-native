import axios from 'axios';
import {GetUserInfo} from '../../Action/action.js';

export function requestGetUser() {
  return axios({
    method: 'get',
    url: 'https://my-json-server.typicode.com/khanh21011999/demo/user',
  })
}
// .done (function(data) {
// 	console.log(data[0].username + " " + data.password)
//   })
// .fail (function() {
//     console.log("Failed to fetch data");
//   })
// .always (function() {
//     console.log("This function always executes whether success or fail");
//   });
// }

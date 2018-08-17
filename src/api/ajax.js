/*发送ajax请求*/
import axios from "axios";
export default  function ajax(url,data = {} ,type = "GET") {
  return new Promise(function (resolve, reject){
    let promise
    if(type === "GET"){
      let queryStr = "";
      Object.keys(data).forEach(key => {
        queryStr += key + "=" + data[key] + "&";
      });
      if(queryStr){
        queryStr = queryStr.substring(0,queryStr.length - 1);
        queryStr = "?" + queryStr
      }
      promise =  axios.get(url+queryStr)
    }else{
      promise = axios.post(url,data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

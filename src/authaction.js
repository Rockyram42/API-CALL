import axios from 'axios'
import * as types from './constant'

export function newUserLogin(newC) {
    console.log(newC);
    
    return async function (dispatch) {
      let results = axios({
        method: "post",
        url: "/users",
        data: {
            name: newC.name,
            email: newC.email,
            password: newC.password,
          },
      });
    //   console.log(newC.name);
      
  
      let response = await results;
      if (response.status === 200) {
        dispatch({
          type: types.NEW_USER_LOGIN,
          item: response.data,
        });
      }
      console.log(response);
    };
  }
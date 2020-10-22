import axios from "axios";
import * as types from './constant' 

export function getApiData() {
  return async function (dispatch) {
    let results = axios({
      method: "get",
      url: "/notes",
    });

    let response = await results;
    if (response.status === 200) {
      dispatch({
        type: types.GET_CARD_LIST,
        item: response.data,
      });
    }
    // console.log(response);
  };
}

export function createCard(newC) {
  // console.log(newC);
  return async function (dispatch) {
    let results = axios({
      method: "post",
      url: "/notes",
      data: {
        title: newC.title,
        content: newC.content,
      },
    });

    let response = await results;
    if (response.status === 200) {
      dispatch({
        type: types.POST_CARD_LIST,
        card: response.data,
      });
    }
    // console.log(response.data);
  };
}

export function deleteCard(id) {
  // console.log(id);
  return async function (dispatch) {
    let results = axios({
      method: "delete",
      url: `/notes/${id}`,
    });

    let response = await results;
    if (response.status === 200) {
      dispatch({
        type: types.DELETE_CARD_LIST,
        id,
      });
    }
    // console.log(id);
  };
}

export function updateCard(id, editC) {
  // console.log(editC);
  return async function (dispatch) {
    let results = axios({
      method: "put",
      url: `/notes/${id}`,
      data: {
        title: editC.title,
        content: editC.content,
      },
    });

    let response = await results;
    if (response.status === 200) {
      dispatch({
        type: types.PUT_CARD_LIST,
        eCard: response.data,
      });
    }
    // console.log(response.data);
  };
}

import * as types from './constant'

const initialState = {
  data: [],
  isLoader : true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARD_LIST: {
      return {
        ...state,
        data: action.item,
        isLoader : false
        // data as action received data
      };
    }
    case types.POST_CARD_LIST: {
      return {
        ...state,
        data: state.data.concat(action.card),
        isLoader : false
        // use concate to merge the data with the state data
      };
    }
    case types.DELETE_CARD_LIST: {
      // console.log(action);

      return {
        ...state,
        data: state.data.filter((data) => data._id !== action.id),
        isLoader : false
        // use filter for find the removed data from the server
        // then update the store using filter
      };
    }
    case types.PUT_CARD_LIST: {
      // console.log(action);
      return {
        ...state,
        data: state.data.map((data) => {
          return data._id === action.eCard._id ? action.eCard : data;
        }),
        isLoader : false
        // replace matched item and returns the array
      };
    }
    default:
      return state;
  }
};

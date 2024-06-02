import { ALLUSERS, CREATEUSERS, DELETEUSERS, ERROR, SINGLEUSERS, UPDATEUSERS } from "../actiontype";

const initialState = {
  data: []
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case ALLUSERS:
      return {
        ...state,
        list: action.payload
      }
    case CREATEUSERS:

      return {
        ...state,
        postData: action.payload
      }
    case SINGLEUSERS:

      return {
        ...state,
        singleData: action.payload
      }
    case DELETEUSERS:

      return {
        ...state,
        postDeleted: action.payload
      }

    case UPDATEUSERS:

      return {
        ...state,
        updatedPost: action.payload
      }

    case ERROR:
      return {
        ...state,
        Error: action.payload
      }
    default:
      return state
  }
}


export default userReducer;
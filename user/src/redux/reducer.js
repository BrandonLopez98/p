import { GET_GAMES } from './action-types'
  
  const initialState = {
   
  }
  
  const reducer = (state = initialState, {type,payload}) => {

    switch (type) {
        case GET_GAMES:
          return { ...state}
  
      default:
        return { ...state }
    }
  }
  
  export default reducer
  
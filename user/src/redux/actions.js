import { GET_GAMES } from './action-types'

export const getGames = () =>{
    return async (dispatch) =>{
        const response = await axios.get('http://localhost:3001/videogame/')
        return dispatch({ type: GET_GAMES, payload: response.data })
    }
}

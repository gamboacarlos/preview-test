import * as actionTypes from './actionTypes'
import * as reducerTypes from '../../types/reducerTypes'
import { CharacterData } from '../../types/commonTypes'

// Initial state ================================================================
const initialState: reducerTypes.AppState = {
  loading: false,
  characters: [],
  currentCharacter: [],
  quote: [],
  currentPage: 1,
  currentOffset: 0,
  currentLanguage: 'en',
}

// REDUCER ======================================================================
const appReducer = (
  state: reducerTypes.AppState = initialState,
  action: reducerTypes.AppReducerActions
): reducerTypes.AppState => {
  switch (action.type) {
    case actionTypes.START_DATA_FETCH:
      return state
    case actionTypes.START_SPECIFIC_CHARACTER_DATA_FETCH:
      return state
    case actionTypes.SET_CHARACTERS_DATA:
      return {
        ...state,
        characters: [...(action.payload as CharacterData[])],
        currentCharacter: [],
      }
    case actionTypes.SET_CURRENT_CHARACTER_DATA:
      return {
        ...state,
        currentCharacter: [...(action.payload as CharacterData[])],
      }
    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload as number }
    case actionTypes.SET_CURRENT_OFFSET:
      return { ...state, currentOffset: action.payload as number }
    case actionTypes.SET_CURRENT_LANGUAGE:
      return { ...state, currentLanguage: action.payload as string }
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload as boolean }
    default:
      return state
  }
}

export default appReducer

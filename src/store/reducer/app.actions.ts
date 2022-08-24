import * as actionTypes from './actionTypes'
import * as reducerTypes from '../../types/reducerTypes'
import { CharacterData } from '../../types/commonTypes'

// Start characters data fetch ====================================================
export const startDataFetch = (): reducerTypes.ActionStartDataFetch => {
  return {
    type: actionTypes.START_DATA_FETCH,
    payload: null,
  }
}

// Set all characters data ========================================================
export const setCharactersData = (
  data: CharacterData[]
): reducerTypes.ActionSetAllCharacters => {
  return {
    type: actionTypes.SET_CHARACTERS_DATA,
    payload: data,
  }
}

// Set current characters data ========================================================
export const setCurrentCharacterData = (
  data: CharacterData
): reducerTypes.ActionSetCurrentCharacterData => {
  return {
    type: actionTypes.SET_CURRENT_CHARACTER_DATA,
    payload: data,
  }
}

// Set current characters data ========================================================
export const startSpecificCharacterFetch = (
  char: number
): reducerTypes.ActionStartSpecificCharacterFetch => {
  return {
    type: actionTypes.START_SPECIFIC_CHARACTER_DATA_FETCH,
    payload: char,
  }
}

// Set loading ============================================================
export const setLoading = (loading: boolean): reducerTypes.ActionSetLoading => {
  return {
    type: actionTypes.SET_LOADING,
    payload: loading,
  }
}

// Set current page ==========================================================
export const setCurrentPage = (
  page: number
): reducerTypes.ActionSetCurrentPage => {
  return {
    type: actionTypes.SET_CURRENT_PAGE,
    payload: page,
  }
}

// Set current offset ==========================================================
export const setCurrentOffset = (
  offset: number
): reducerTypes.ActionSetCurrentOffset => {
  return {
    type: actionTypes.SET_CURRENT_OFFSET,
    payload: offset,
  }
}

// Set current language ==========================================================
export const setCurrentLanguage = (
  lang: string
): reducerTypes.ActionSetCurrentLanguage => {
  return {
    type: actionTypes.SET_CURRENT_LANGUAGE,
    payload: lang,
  }
}

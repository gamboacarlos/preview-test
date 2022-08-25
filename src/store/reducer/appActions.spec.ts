import * as actionTypes from './actionTypes'
import * as reducerTypes from '../../types/reducerTypes'
import { CharacterData } from '../../types/commonTypes'
import '@testing-library/jest-dom'
import {
  characterListMockData,
  mockQuote,
  singleCharacterMockData,
} from '../../utils/testingUtils'
import {
  setCharacterQuote,
  setCharactersData,
  setCurrentCharacterData,
  setCurrentLanguage,
  setCurrentOffset,
  setCurrentPage,
  setLoading,
  startDataFetch,
  startSpecificCharacterFetch,
} from './app.actions'

describe('Actions creators unit test', () => {
  // Test ================================================================================
  test('startDataFetch action', () => {
    const action: reducerTypes.ActionStartDataFetch = startDataFetch()

    expect(action.type).toEqual(actionTypes.START_DATA_FETCH)
    expect(action.payload).toEqual(null)
  })

  // Test ================================================================================
  test('setCharactersData action', () => {
    const payload: CharacterData[] = characterListMockData
    const action: reducerTypes.ActionSetAllCharacters =
      setCharactersData(payload)

    expect(action.type).toEqual(actionTypes.SET_CHARACTERS_DATA)
    expect(action.payload).toEqual(payload)
  })

  // Test ================================================================================
  test('setCurrentCharacterData action', () => {
    const payload: CharacterData = singleCharacterMockData
    const action: reducerTypes.ActionSetCurrentCharacterData =
      setCurrentCharacterData(payload)

    expect(action.type).toEqual(actionTypes.SET_CURRENT_CHARACTER_DATA)
    expect(action.payload).toEqual(payload)
  })

  // Test ================================================================================
  test('startSpecificCharacterFetch action', () => {
    const payload: number = 2
    const action: reducerTypes.ActionStartSpecificCharacterFetch =
      startSpecificCharacterFetch(payload)

    expect(action.type).toEqual(actionTypes.START_SPECIFIC_CHARACTER_DATA_FETCH)
    expect(action.payload).toEqual(payload)
  })

  // Test ================================================================================
  test('setCharacterQuote action', () => {
    const payload: string = mockQuote
    const action: reducerTypes.ActionSetCharacterQuote =
      setCharacterQuote(payload)

    expect(action.type).toEqual(actionTypes.SET_CHARACTER_QUOTE)
    expect(action.payload).toEqual(payload)
  })

  // Test ================================================================================
  test('setLoading action', () => {
    const payload: boolean = true
    const action: reducerTypes.ActionSetLoading = setLoading(payload)

    expect(action.type).toEqual(actionTypes.SET_LOADING)
    expect(action.payload).toEqual(payload)
  })

  // Test ================================================================================
  test('setCurrentPage action', () => {
    const payload: number = 2
    const action: reducerTypes.ActionSetCurrentPage = setCurrentPage(payload)

    expect(action.type).toEqual(actionTypes.SET_CURRENT_PAGE)
    expect(action.payload).toEqual(payload)
  })

  // Test ================================================================================
  test('setCurrentOffset action', () => {
    const payload: number = 6
    const action: reducerTypes.ActionSetCurrentOffset =
      setCurrentOffset(payload)

    expect(action.type).toEqual(actionTypes.SET_CURRENT_OFFSET)
    expect(action.payload).toEqual(payload)
  })

  // Test ================================================================================
  test('setCurrentLanguage action', () => {
    const payload: string = 'ru'
    const action: reducerTypes.ActionSetCurrentLanguage =
      setCurrentLanguage(payload)

    expect(action.type).toEqual(actionTypes.SET_CURRENT_LANGUAGE)
    expect(action.payload).toEqual(payload)
  })
})

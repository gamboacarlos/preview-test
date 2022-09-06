import * as actionTypes from './actions/actionTypes'
import '@testing-library/jest-dom'
import appReducer, { initialState } from './app.reducer'
import {
  characterListMockData,
  mockQuote,
  singleCharacterMockData,
} from '../../utils/testingUtils'

describe('App reducer test', () => {
  // Test ============================================================================
  test('should return the initial state', () => {
    expect(appReducer(undefined, {} as any)).toEqual(initialState)
  })

  // Test ============================================================================
  test('should handle SET_CHARACTERS_DATA properly', () => {
    const type = actionTypes.SET_CHARACTERS_DATA
    const payload = characterListMockData

    const action = { type, payload }
    const reducerReturnValue = appReducer(initialState, action)

    expect(reducerReturnValue.characters).toEqual(characterListMockData)
  })

  // Test ============================================================================
  test('should handle SET_CURRENT_CHARACTER_DATA properly', () => {
    const type = actionTypes.SET_CURRENT_CHARACTER_DATA
    const payload = singleCharacterMockData

    const action = { type, payload }
    const reducerReturnValue = appReducer(initialState, action)

    expect(reducerReturnValue.currentCharacter).toEqual(singleCharacterMockData)
  })

  // Test ============================================================================
  test('should handle SET_CHARACTER_QUOTE properly', () => {
    const type = actionTypes.SET_CHARACTER_QUOTE
    const payload = mockQuote

    const action = { type, payload }
    const reducerReturnValue = appReducer(initialState, action)

    expect(reducerReturnValue.quote).toEqual(mockQuote)
  })

  // Test ============================================================================
  test('should handle SET_LOADING properly', () => {
    const type = actionTypes.SET_LOADING
    const payload = true

    const action = { type, payload }
    const reducerReturnValue = appReducer(initialState, action)

    expect(reducerReturnValue.loading).toEqual(true)
  })

  // Test ============================================================================
  test('should handle SET_CURRENT_PAGE properly', () => {
    const type = actionTypes.SET_CURRENT_PAGE
    const payload = 3

    const action = { type, payload }
    const reducerReturnValue = appReducer(initialState, action)

    expect(reducerReturnValue.currentPage).toEqual(3)
  })

  // Test ============================================================================
  test('should handle SET_CURRENT_OFFSET properly', () => {
    const type = actionTypes.SET_CURRENT_OFFSET
    const payload = 12

    const action = { type, payload }
    const reducerReturnValue = appReducer(initialState, action)

    expect(reducerReturnValue.currentOffset).toEqual(12)
  })

  // Test ============================================================================
  test('should handle SET_CURRENT_LANGUAGE properly', () => {
    const type = actionTypes.SET_CURRENT_LANGUAGE
    const payload = 'ru'

    const action = { type, payload }
    const reducerReturnValue = appReducer(initialState, action)

    expect(reducerReturnValue.currentLanguage).toEqual('ru')
  })
})

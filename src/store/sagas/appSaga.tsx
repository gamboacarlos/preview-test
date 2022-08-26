import { CharacterData, CharacterQuote } from '../../types/commonTypes'
import { call, put, takeLatest, select } from 'redux-saga/effects'
import { formatStringForQuoteQuery } from '../../utils/functions'
import fetchData from '../../utils/fetchData'
import { currentOffset } from './selectors'
import { AnyAction } from 'redux'
import {
  setCharacterQuote,
  setCharactersData,
  setCurrentCharacterData,
  setLoading,
} from '../reducer/app.actions'
import {
  START_DATA_FETCH,
  SET_CURRENT_OFFSET,
  START_SPECIFIC_CHARACTER_DATA_FETCH,
} from '../reducer/actionTypes'

// Fetch characters with pagination ===================================================
export function* fetchCharacters() {
  try {
    yield put(setLoading(true))
    // Get current offset from state
    const offset: number = yield select(currentOffset)
    const data: CharacterData[] = yield call(
      fetchData,
      `characters?limit=6&offset=${offset}`
    )
    // Set all available characters to state
    yield put(setCharactersData(data))
    yield put(setLoading(false))
  } catch (err) {
    console.error(err)
  }
}

// Search a specific character ========================================================
function* fetchSpecificCharacter({
  type,
  payload,
}: {
  type: AnyAction
  payload: number
}) {
  try {
    yield put(setLoading(true))
    // Get character data
    const [charData]: CharacterData[] = yield call(
      fetchData,
      `characters/${payload}`
    )
    // Get character quote
    const [quote]: CharacterQuote[] = yield call(
      fetchData,
      `quote/random?author=${formatStringForQuoteQuery(charData.name)}`
    )
    // Set the character data to state
    yield put(setCurrentCharacterData(charData))
    // Check if a quote is available and set it to state
    if (quote !== undefined) {
      yield put(setCharacterQuote(quote.quote))
    } else {
      yield put(setCharacterQuote('No quotes for this character'))
    }
    yield put(setLoading(false))
  } catch (error) {
    yield console.error(error)
  }
}

// Export all sagas ===================================================================
export default function* appSaga() {
  yield takeLatest([START_DATA_FETCH, SET_CURRENT_OFFSET], fetchCharacters)
  yield takeLatest(START_SPECIFIC_CHARACTER_DATA_FETCH, fetchSpecificCharacter)
}

import { useDispatch, useSelector } from 'react-redux'
import { MainStore } from '../../store/store'
import * as reducerTypes from '../../types/reducerTypes'
import {
  setLoading,
  startDataFetch,
  startSpecificCharacterFetch,
} from '../../store/reducer/actions/app.actions'

const useData = () => {
  // Hooks ============================================================================
  const dispatch = useDispatch()
  const { characters, loading, quote, currentCharacter } = useSelector(
    (state: MainStore): reducerTypes.AppState => state
  )

  // Fetch characters data ============================================================
  const handleStartDataFetch = () => dispatch(startDataFetch())

  // Handle get specific character ====================================================
  const handleStartSpecificCharacterFetch = (char: number) => {
    dispatch(startSpecificCharacterFetch(char))
  }

  // Handle set loading ===============================================================
  const handleSetLoading = (loading: boolean) => {
    dispatch(setLoading(loading))
  }

  return {
    loading,
    quote,
    characters,
    currentCharacter,
    handleStartDataFetch,
    handleStartSpecificCharacterFetch,
    handleSetLoading,
  }
}

export default useData

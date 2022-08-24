import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentLanguage,
  setCurrentOffset,
  setCurrentPage,
  startDataFetch,
  startSpecificCharacterFetch,
} from '../store/reducer/app.actions'
import { MainStore } from '../store/store'
import * as reducerTypes from '../types/reducerTypes'
import i18n from '../i18n'

const useAppReducer = () => {
  // Hooks ===========================================================================
  const dispatch = useDispatch()
  const {
    currentPage,
    characters,
    loading,
    quote,
    currentOffset,
    currentLanguage,
    currentCharacter,
  } = useSelector((state: MainStore): reducerTypes.AppState => state)

  // Fetch characters data ===========================================================
  const handleStartDataFetch = () => dispatch(startDataFetch())

  // Handle set next page ============================================================
  const handleNextPage = () => {
    dispatch(setCurrentOffset(currentOffset + 6))
    dispatch(setCurrentPage(currentPage + 1))
  }

  // Handle set previous page =========================================================
  const handlePreviousPage = () => {
    dispatch(setCurrentOffset(currentOffset - 6))
    dispatch(setCurrentPage(currentPage - 1))
  }

  // Handle change language ===========================================================
  const handleChangeLanguage = (lang: string) => {
    dispatch(setCurrentLanguage(lang))
    i18n.changeLanguage(lang)
  }

  // Handle get specific character ====================================================
  const handleStartSpecificCharacterFetch = (char: number) => {
    dispatch(startSpecificCharacterFetch(char))
  }

  return {
    loading,
    quote,
    characters,
    currentPage,
    currentOffset,
    currentCharacter,
    currentLanguage,
    handleStartDataFetch,
    handleNextPage,
    handlePreviousPage,
    handleChangeLanguage,
    handleStartSpecificCharacterFetch,
  }
}

export default useAppReducer

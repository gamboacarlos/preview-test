import { setCurrentLanguage } from '../../store/reducer/actions/app.actions'
import * as reducerTypes from '../../types/reducerTypes'
import { useDispatch, useSelector } from 'react-redux'
import { MainStore } from '../../store/store'
import i18n from '../../translations/i18n'
import { useTranslation } from 'react-i18next'

const useTranslator = () => {
  // Hooks ============================================================================
  const dispatch = useDispatch()
  const { t: translate } = useTranslation()
  const { currentLanguage } = useSelector(
    (state: MainStore): reducerTypes.AppState => state
  )

  // Handle change language ===========================================================
  const handleChangeLanguage = (lang: string) => {
    dispatch(setCurrentLanguage(lang))
    i18n.changeLanguage(lang)
  }

  return {
    translate,
    currentLanguage,
    handleChangeLanguage,
  }
}

export default useTranslator

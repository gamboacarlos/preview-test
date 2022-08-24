import Layout from '../components/Layout/Layout'
import { useLocation } from 'react-router-dom'
import useAppReducer from '../hooks/useAppReducer'
import CharacterInfo from '../components/CharacterInfo/CharacterInfo'
import { FC, useEffect } from 'react'
import { CharacterData } from '../types/commonTypes'
import LoadingScreen from '../components/LoadingScreen/LoadingScreen'

const CharacterView: FC = () => {
  // Hooks =================================================================
  const location = useLocation()
  const {
    currentCharacter,
    handleStartSpecificCharacterFetch,
    handleSetLoading,
    quote,
    loading,
  } = useAppReducer()

  useEffect(() => {
    handleSetLoading(true)
    handleStartSpecificCharacterFetch(characterIdFromPathName)
  }, [])

  // Constants =============================================================
  const character = currentCharacter as CharacterData
  const characterIdFromPathName = Number(
    location.pathname.replace('/character/', '')
  )

  return (
    <Layout>
      {loading || character.appearance === undefined ? (
        <LoadingScreen />
      ) : (
        <CharacterInfo character={character} quote={quote} />
      )}
    </Layout>
  )
}

export default CharacterView

import { FC, useEffect } from 'react'
import CharactersList from '../components/CharactersList/CharactersList'
import Layout from '../components/Layout/Layout'
import useAppReducer from '../hooks/useAppReducer'

const HomeView: FC = () => {
  // Hooks =====================================================================
  const { handleStartDataFetch, characters, loading } = useAppReducer()

  useEffect(() => {
    handleStartDataFetch()
  }, [])

  return (
    <Layout>
      <CharactersList characters={characters} loading={loading} />
    </Layout>
  )
}

export default HomeView

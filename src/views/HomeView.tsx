import { FC, useEffect } from 'react'
import CharactersList from '../components/CharactersList/CharactersList'
import Layout from '../components/Layout/Layout'
import useData from '../hooks/useData/useData'

const HomeView: FC = () => {
  // Hooks =====================================================================
  const { handleStartDataFetch, characters, loading } = useData()

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

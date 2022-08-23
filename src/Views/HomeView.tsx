import { FC } from 'react'
import CharactersList from '../components/CharactersList/CharactersList'
import Layout from '../components/Layout/Layout'

const HomeView: FC = () => {
  return (
    <Layout>
      <CharactersList />
    </Layout>
  )
}

export default HomeView

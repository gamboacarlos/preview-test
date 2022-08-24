import { FC, useEffect } from 'react'
import useAppReducer from '../../hooks/useAppReducer'
import { CharacterData } from '../../types/commonTypes'
import CharacterCard from '../CharacterCard/CharacterCard'
import Paginator from '../Paginator/Paginator'
import styles from './CharactersList.module.scss'

const CharactersList: FC = () => {
  // Hooks =====================================================================
  const { handleStartDataFetch, characters } = useAppReducer()

  useEffect(() => {
    handleStartDataFetch()
  }, [])

  return (
    <div className={styles.listWrapper}>
      <div className={styles.listBody}>
        {characters.map((char: CharacterData) => (
          <CharacterCard data={char} key={char.char_id} />
        ))}
      </div>
      <Paginator />
    </div>
  )
}

export default CharactersList

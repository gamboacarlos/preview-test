import { FC } from 'react'
import { CardCharacterData, CharacterListProps } from '../../types/commonTypes'
import CharacterCard from '../CharacterCard/CharacterCard'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import Paginator from '../Paginator/Paginator'
import styles from './CharactersList.module.scss'

const CharactersList: FC<CharacterListProps> = ({ characters, loading }) => {
  return (
    <div className={styles.listWrapper} data-testid="char-list">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className={styles.listBody}>
          {characters.map((char: CardCharacterData) => (
            <CharacterCard {...char} key={char.char_id} />
          ))}
        </div>
      )}
      <Paginator />
    </div>
  )
}

export default CharactersList

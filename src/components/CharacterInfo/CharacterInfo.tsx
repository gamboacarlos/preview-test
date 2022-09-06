import { FC } from 'react'
import { formatInfoArray } from '../../utils/functions'
import { CharacterInfoProps } from '../../types/commonTypes'
import styles from './CharacterInfo.module.scss'
import CharacterDescription from '../CharacterDescription/CharacterDescription'

const CharacterInfo: FC<CharacterInfoProps> = ({ character, quote }) => {
  // Constatnts =================================================================
  const {
    char_id: id,
    name,
    birthday,
    occupation,
    img,
    status,
    nickname,
    appearance,
    portrayed,
    category,
    better_call_saul_appearance: bcsAppearance,
  } = character

  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoImage}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.infoBody}>
        <h2 data-testid="info-name">{name}</h2>
        <CharacterDescription name="nickname">{nickname}</CharacterDescription>
        <CharacterDescription name="id">{id}</CharacterDescription>
        <CharacterDescription name="birthday">{birthday}</CharacterDescription>
        <div className={styles.occupationInfo}>
          <CharacterDescription name="occupation">
            {formatInfoArray(occupation)}
          </CharacterDescription>
        </div>
        <CharacterDescription name="appearance">
          {formatInfoArray(appearance)}
        </CharacterDescription>
        <CharacterDescription name="status" testId="info-status">
          {status}
        </CharacterDescription>
        <CharacterDescription name="portrayed">
          {portrayed}
        </CharacterDescription>
        <CharacterDescription name="category" testId="info-category">
          {category}
        </CharacterDescription>
        {bcsAppearance.length >= 1 ? (
          <CharacterDescription name="bcsAppearance">
            {formatInfoArray(bcsAppearance)}
          </CharacterDescription>
        ) : null}
        <div className={styles.infoQuote}>
          <CharacterDescription name="quote" testId="info-quote">
            {quote}
          </CharacterDescription>
        </div>
      </div>
    </div>
  )
}

export default CharacterInfo

import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import useTranslator from '../../hooks/useTranslator/useTranslator'
import { CardCharacterData } from '../../types/commonTypes'
import styles from './CharacterCard.module.scss'

const CharacterCard: FC<CardCharacterData> = ({
  char_id: id,
  name,
  img,
  status,
  nickname,
}) => {
  // Hooks ===============================================================
  const { translate } = useTranslator()
  const navigate = useNavigate()

  return (
    <div className={styles.cardWrapper} data-testid="char-card">
      <div onClick={() => navigate(`character/${id}`)}>
        <div className={styles.cardPhoto}>
          <img src={img} alt={name} data-testid="char-photo" />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.characterName}>
            <h3 data-testid="char-name">{name}</h3>
          </div>
          <p data-testid="card-nickname">
            {translate('characterInfo.nickname')}
            <span data-testid="char-nickname">{nickname}</span>
          </p>
          <p data-testid="card-status">
            {translate('characterInfo.status')}
            <span data-testid="char-status">{status}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard

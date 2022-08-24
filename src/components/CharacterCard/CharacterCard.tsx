import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
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
  const { t } = useTranslation()
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
          <p>
            {t('characterInfo.nickname')}
            <span data-testid="char-nickname">{nickname}</span>
          </p>
          <p>
            {t('characterInfo.status')}
            <span data-testid="char-status">{status}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard

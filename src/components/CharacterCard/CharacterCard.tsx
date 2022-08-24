import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import useAppReducer from '../../hooks/useAppReducer'
import { CardCharacterData } from '../../types/commonTypes'
import styles from './CharacterCard.module.scss'

const CharacterCard: FC<{ data: CardCharacterData }> = ({ data }) => {
  const { char_id: id, name, img, status, nickname } = data
  // Hooks ===============================================================
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { handleStartSpecificCharacterFetch } = useAppReducer()

  // Handle loadCharacterInfoView =====================================
  const loadSpecificCharacterInfoView = () => {
    handleStartSpecificCharacterFetch(id)
    navigate(`character/${name.replace(' ', '+')}`)
  }
  return (
    <div className={styles.cardWrapper}>
      <div onClick={loadSpecificCharacterInfoView}>
        <div className={styles.cardPhoto}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.characterName}>
            <h3>{name}</h3>
          </div>
          {/* <p>
          Birthday: <span>{birthday}</span>
        </p> */}
          <div className={styles.occupationInfo}>
            {/* <p>
            Occupation: <span>{formatedOccupation}</span>
          </p> */}
          </div>
          <p>
            {t('characterInfo.nickname')}
            <span>{nickname}</span>
          </p>
          <p>
            {t('characterInfo.status')}
            <span>{status}</span>
          </p>
          {/* <p>
          Appereance: <span>{formatedAppearance}</span>
        </p> */}
          {/* <p>
          Portrayed: <span>{portrayed}</span>
        </p> */}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard

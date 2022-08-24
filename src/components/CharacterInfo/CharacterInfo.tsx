import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { formatInfoArray } from '../../helpers/functions'
import { CharacterInfoProps } from '../../types/commonTypes'
import styles from './CharacterInfo.module.scss'

const CharacterInfo: FC<CharacterInfoProps> = ({ character, quote }) => {
  // Hooks ======================================================================
  const { t } = useTranslation()

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
        <p>
          {t('characterInfo.nickname')}
          <span>{nickname}</span>
        </p>
        <p>
          {t('characterInfo.id')}
          <span>{id}</span>
        </p>
        <p>
          {t('characterInfo.birthday')} <span>{birthday}</span>
        </p>
        <div className={styles.occupationInfo}>
          <p>
            {t('characterInfo.occupation')}
            <span>{formatInfoArray(occupation)}</span>
          </p>
        </div>
        <p>
          {t('characterInfo.appearance')}
          <span>{formatInfoArray(appearance)}</span>
        </p>
        <p>
          {t('characterInfo.status')}
          <span data-testid="info-status">{status}</span>
        </p>
        <p>
          {t('characterInfo.portrayed')} <span>{portrayed}</span>
        </p>
        <p>
          {t('characterInfo.category')}
          <span data-testid="info-category">{category}</span>
        </p>
        {bcsAppearance.length >= 1 ? (
          <p>
            {t('characterInfo.bcsAppearance')}
            <span>{formatInfoArray(bcsAppearance)}</span>
          </p>
        ) : null}
        <div className={styles.infoQuote}>
          <p>
            {t('characterInfo.quote')}{' '}
            <span data-testid="info-quote">{quote}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterInfo

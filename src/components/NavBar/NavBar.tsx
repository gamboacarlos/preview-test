import { FC } from 'react'
import { Link } from 'react-router-dom'
import useTranslator from '../../hooks/useTranslator/useTranslator'
import styles from './NavBar.module.scss'

const NavBar: FC = () => {
  // Hooks ===========================================================================
  const { currentLanguage, handleChangeLanguage, translate } = useTranslator()

  return (
    <div className={styles.NavBarWrapper}>
      <div className={styles.NavBarBody}>
        <Link to="/">
          <button className={styles.logoButton}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/400px-Breaking_Bad_logo.svg.png"
              alt="logo"
            />
          </button>
        </Link>
        <div>
          <button
            data-testid="lang-button-es"
            className={
              currentLanguage === 'es'
                ? styles.languageButtonDisabled
                : styles.languageButtonEnabled
            }
            onClick={() => handleChangeLanguage('es')}
          >
            {translate('navBar.es')}
          </button>
          <button
            data-testid="lang-button-en"
            className={
              currentLanguage === 'en'
                ? styles.languageButtonDisabled
                : styles.languageButtonEnabled
            }
            onClick={() => handleChangeLanguage('en')}
          >
            {translate('navBar.en')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar

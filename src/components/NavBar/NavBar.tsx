import { FC } from 'react'
import { Link } from 'react-router-dom'
import useAppReducer from '../../hooks/useAppReducer'
// import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar: FC = () => {
  // Hooks ===========================================================================
  //   const navigate = useNavigate()
  const { currentLanguage, handleChangeLanguage } = useAppReducer()

  return (
    <div className={styles.NavBarWrapper}>
      <div className={styles.NavBarBody}>
        <Link to="/">
          <button className={styles.logoButton}>
            <img
              style={{ height: '38px' }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/400px-Breaking_Bad_logo.svg.png"
              alt="logo"
            />
          </button>
        </Link>
        <div>
          <button
            className={
              currentLanguage === 'es'
                ? styles.languageButtonDisabled
                : styles.languageButtonEnabled
            }
            onClick={() => handleChangeLanguage('es')}
          >
            Spanish
          </button>
          <button
            className={
              currentLanguage === 'en'
                ? styles.languageButtonDisabled
                : styles.languageButtonEnabled
            }
            onClick={() => handleChangeLanguage('en')}
          >
            English
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar

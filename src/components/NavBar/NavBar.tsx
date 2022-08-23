import { FC } from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar: FC = () => {
  // Hooks ===========================================================================
  //   const navigate = useNavigate()

  return (
    <div className={styles.NavBarWrapper}>
      <div className={styles.NavBarBody}>
        <button style={{ backgroundColor: 'transparent', borderStyle: 'none' }}>
          <img
            style={{ height: '38px' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/400px-Breaking_Bad_logo.svg.png"
            alt="logo"
          />
        </button>
      </div>
    </div>
  )
}

export default NavBar

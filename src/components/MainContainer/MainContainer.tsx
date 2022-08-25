import { FC, ReactNode } from 'react'
import styles from './MainContainer.module.scss'

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.containerWrapper} data-testid="main-container">
      {children}
    </div>
  )
}

export default MainContainer

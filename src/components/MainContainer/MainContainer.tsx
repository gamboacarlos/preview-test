import { FC, ReactNode } from 'react'
import styles from './MainContainer.module.scss'

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.containerWrapper}>{children}</div>
}

export default MainContainer

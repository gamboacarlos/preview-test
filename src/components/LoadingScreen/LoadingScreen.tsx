import { FC } from 'react'
import styles from './LoadingScreen.module.scss'

const LoadingScreen: FC = () => {
  return (
    <div className={styles.screenWrapper} data-testid="loading-screen">
      <div className={styles.loadingAnimation}>
        <h2>Loading...</h2>
      </div>
    </div>
  )
}

export default LoadingScreen

import { FC } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <a href="https://breakingbadapi.com/">
        <h4>Breaking Bad API</h4>
      </a>
    </div>
  )
}

export default Footer

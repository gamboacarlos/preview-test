import { FC } from 'react'
import styles from './Heading.module.scss'

const Heading: FC<{ children: string }> = ({ children }) => {
  return <h1 className={styles.headingStyle}>{children}</h1>
}

export default Heading

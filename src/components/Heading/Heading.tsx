import { FC } from 'react'
import styles from './Heading.module.scss'
const Heading: FC<{ children: string }> = ({ children }) => {
  return (
    <div>
      <h1 className={styles.headingStyle}>{children}</h1>
    </div>
  )
}

export default Heading

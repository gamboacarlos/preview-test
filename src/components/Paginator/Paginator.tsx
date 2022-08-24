import { FC } from 'react'
import useAppReducer from '../../hooks/useAppReducer'
import styles from './Paginator.module.scss'
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'

const Paginator: FC = () => {
  // Hooks =========================================================================
  const {
    currentPage,
    currentOffset,
    characters,
    handleNextPage,
    handlePreviousPage,
  } = useAppReducer()

  return (
    <div className={styles.paginatorWrapper}>
      <button
        className={styles.paginatorNavigatorButton}
        disabled={currentOffset === 0}
        onClick={handlePreviousPage}
      >
        <IoArrowBackCircle
          color={currentPage === 1 ? '#d8e5de' : '#0f4d2f'}
          size="40px"
        />
      </button>
      <p>{currentPage}</p>
      <button
        className={styles.paginatorNavigatorButton}
        disabled={characters.length < 6}
        onClick={handleNextPage}
      >
        <IoArrowForwardCircle
          color={characters.length < 6 ? '#d8e5de' : '#0f4d2f'}
          size="40px"
        />
      </button>
    </div>
  )
}

export default Paginator

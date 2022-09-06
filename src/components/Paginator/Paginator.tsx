import { FC } from 'react'
import styles from './Paginator.module.scss'
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'
import usePagination from '../../hooks/usePagination/usePagination'
import useData from '../../hooks/useData/useData'

const Paginator: FC = () => {
  // Hooks =========================================================================
  const { currentPage, currentOffset, handleNextPage, handlePreviousPage } =
    usePagination()
  const { characters } = useData()

  return (
    <div className={styles.paginatorWrapper}>
      <button
        data-testid="back-button"
        className={styles.paginatorNavigatorButton}
        disabled={currentOffset === 0}
        onClick={handlePreviousPage}
      >
        <IoArrowBackCircle
          color={currentPage === 1 ? '#d8e5de' : '#0f4d2f'}
          size="40px"
        />
      </button>
      <p data-testid="current-page">{currentPage}</p>
      <button
        data-testid="foward-button"
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

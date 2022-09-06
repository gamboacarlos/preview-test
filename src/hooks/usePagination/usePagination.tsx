import { useDispatch, useSelector } from 'react-redux'
import { MainStore } from '../../store/store'
import * as reducerTypes from '../../types/reducerTypes'
import {
  setCurrentOffset,
  setCurrentPage,
} from '../../store/reducer/actions/app.actions'

const usePagination = () => {
  // Hooks ============================================================================
  const dispatch = useDispatch()
  const { currentPage, currentOffset } = useSelector(
    (state: MainStore): reducerTypes.AppState => state
  )

  // Handle set next page =============================================================
  const handleNextPage = () => {
    dispatch(setCurrentOffset(currentOffset + 6))
    dispatch(setCurrentPage(currentPage + 1))
  }

  // Handle set previous page =========================================================
  const handlePreviousPage = () => {
    dispatch(setCurrentOffset(currentOffset - 6))
    dispatch(setCurrentPage(currentPage - 1))
  }

  return {
    currentPage,
    currentOffset,
    handleNextPage,
    handlePreviousPage,
  }
}

export default usePagination

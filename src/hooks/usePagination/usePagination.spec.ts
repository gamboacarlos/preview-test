import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { StoreWrapper } from '../../utils/testingUtils'
import usePagination from './usePagination'

// Test ================================================================================
test('handleNextPage and handlePreviousPage functions test', () => {
  const { result } = renderHook(() => usePagination(), {
    wrapper: StoreWrapper,
  })

  act(() => result.current.handleNextPage())
  expect(result.current.currentPage).toEqual(2)
  expect(result.current.currentOffset).toEqual(6)

  act(() => result.current.handlePreviousPage())
  expect(result.current.currentPage).toEqual(1)
  expect(result.current.currentOffset).toEqual(0)
})

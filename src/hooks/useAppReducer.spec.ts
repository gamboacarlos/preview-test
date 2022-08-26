import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { StoreWrapper } from '../utils/testingUtils'
import useAppReducer from './useAppReducer'

describe('Test useAppReducer custom hook', () => {
  // Test ============================================================================
  test('handleChangeLanguage function test', () => {
    const { result } = renderHook(() => useAppReducer(), {
      wrapper: StoreWrapper,
    })
    act(() => result.current.handleChangeLanguage('ru'))
    expect(result.current.currentLanguage).toEqual('ru')
  })

  // Test ============================================================================
  test('handleSetLoading function test', () => {
    const { result } = renderHook(() => useAppReducer(), {
      wrapper: StoreWrapper,
    })
    act(() => result.current.handleSetLoading(true))
    expect(result.current.loading).toEqual(true)
  })

  // Test ================================================================================
  test('handleNextPage and handlePreviousPage functions test', () => {
    const { result } = renderHook(() => useAppReducer(), {
      wrapper: StoreWrapper,
    })

    act(() => result.current.handleNextPage())
    expect(result.current.currentPage).toEqual(2)
    expect(result.current.currentOffset).toEqual(6)

    act(() => result.current.handlePreviousPage())
    expect(result.current.currentPage).toEqual(1)
    expect(result.current.currentOffset).toEqual(0)
  })
})

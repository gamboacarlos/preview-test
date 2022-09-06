import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { StoreWrapper } from '../../utils/testingUtils'
import useData from './useData'

// Test ============================================================================
test('handleSetLoading function test', () => {
  const { result } = renderHook(() => useData(), {
    wrapper: StoreWrapper,
  })
  act(() => result.current.handleSetLoading(true))
  expect(result.current.loading).toEqual(true)
})

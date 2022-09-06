import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { StoreWrapper } from '../../utils/testingUtils'
import useTranslator from './useTranslator'

// Test ============================================================================
test('handleChangeLanguage function test', () => {
  const { result } = renderHook(() => useTranslator(), {
    wrapper: StoreWrapper,
  })
  act(() => result.current.handleChangeLanguage('ru'))
  expect(result.current.currentLanguage).toEqual('ru')
})

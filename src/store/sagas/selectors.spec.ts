import '@testing-library/jest-dom'
import { currentOffset } from './selectors'

// Test =======================================================================
test('selector gives back the current offset', async () => {
  const state = { currentOffset: 6 }
  const res = currentOffset(state)
  expect(res).toBe(6)
})

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Heading from './Heading'

// Test ============================================================================
test('Heading component display the children string properly', () => {
  const testString = 'Testing'
  const { getByRole } = render(<Heading>{testString}</Heading>)
  const displayedString = getByRole('heading')
  expect(displayedString.textContent).toEqual(testString)
})

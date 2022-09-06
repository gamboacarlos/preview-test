import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { singleCharacterMockData, StoreWrapper } from '../../utils/testingUtils'
import CharacterDescription from './CharacterDescription'

// Test ==============================================================================
test('CharacterDescription should display the passed data properly', () => {
  const { status } = singleCharacterMockData
  render(
    <CharacterDescription name="status" testId="info-status">
      {status}
    </CharacterDescription>,
    { wrapper: StoreWrapper }
  )
  const characterStatus = screen.getByTestId('info-status')

  expect(characterStatus.textContent).toEqual(status)
})

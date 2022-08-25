import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CharacterInfo from './CharacterInfo'
import {
  mockQuote,
  singleCharacterMockData,
  StoreWrapper,
} from '../../utils/testingUtils'

// Test ============================================================================
test('CharacterInfo component is rendering the passed data properly', () => {
  render(
    <CharacterInfo character={singleCharacterMockData} quote={mockQuote} />,
    { wrapper: StoreWrapper }
  )

  const infoName = screen.getByTestId('info-name')
  const infoStatus = screen.getByTestId('info-status')
  const infoCategory = screen.getByTestId('info-category')
  const infoQuote = screen.getByTestId('info-quote')

  expect(infoName.textContent).toEqual(singleCharacterMockData.name)
  expect(infoStatus.textContent).toEqual(singleCharacterMockData.status)
  expect(infoCategory.textContent).toEqual(singleCharacterMockData.category)
  expect(infoQuote.textContent).toEqual(mockQuote)
})

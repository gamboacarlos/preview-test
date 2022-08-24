import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CharacterCard from './CharacterCard'
import {
  singleCharacterMockData,
  StoreWrapper,
} from '../../helpers/testingHelpers'

// Test =====================================================================
test('CharacterCard is displaying the passed data properly', () => {
  const { getByRole, getByTestId } = render(
    <CharacterCard {...singleCharacterMockData} />,
    { wrapper: StoreWrapper } // Connection to store
  )
  const cardName = getByRole('heading')
  const cardNickname = getByTestId('char-nickname')
  const cardStatus = getByTestId('char-status')

  expect(cardName.textContent).toEqual(singleCharacterMockData.name)
  expect(cardNickname.textContent).toEqual(singleCharacterMockData.nickname)
  expect(cardStatus.textContent).toEqual(singleCharacterMockData.status)
})

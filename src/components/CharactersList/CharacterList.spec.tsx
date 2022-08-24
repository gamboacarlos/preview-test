import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  characterListMockData,
  StoreWrapper,
} from '../../helpers/testingHelpers'
import CharactersList from './CharactersList'

// Test ============================================================================
test('CharacterList is rendering all passed elements', () => {
  render(
    <CharactersList characters={characterListMockData} loading={false} />,
    { wrapper: StoreWrapper } // Connection to store
  )
  const list = screen.getAllByTestId('char-card')
  expect(list.length).toEqual(6)
})

// Test ============================================================================
test('CharacterList is rendering cards with the passed names correctly', () => {
  const { getAllByTestId } = render(
    <CharactersList characters={characterListMockData} loading={false} />,
    { wrapper: StoreWrapper } // Connection to store
  )

  // Get all displayed card names
  const cardsNames = getAllByTestId('char-name').map((char) => char.textContent)
  // Get all data names
  const dataNames = characterListMockData.map((char) => char.name)

  expect(dataNames).toEqual(cardsNames)
})

// Test ============================================================================
test('LoadingScreen is rendering when loading is true', () => {
  render(
    <CharactersList characters={characterListMockData} loading={true} />,
    { wrapper: StoreWrapper } // Connection to store
  )
  const loadScreen = screen.getByTestId('loading-screen')
  expect(loadScreen).toBeInTheDocument()
})

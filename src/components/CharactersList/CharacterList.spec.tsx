import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CharactersList from './CharactersList'
import { characterListMockData, StoreWrapper } from '../../utils/testingUtils'

// Test ============================================================================
test('CharacterList is rendering all passed elements', () => {
  render(
    <CharactersList characters={characterListMockData} loading={false} />,
    { wrapper: StoreWrapper }
  )
  const cards = screen.getAllByTestId('char-card')
  expect(cards.length).toEqual(6)
})

// Test ============================================================================
test('CharacterList is rendering cards with the passed names correctly', () => {
  const { getAllByTestId } = render(
    <CharactersList characters={characterListMockData} loading={false} />,
    { wrapper: StoreWrapper }
  )
  // Get all displayed card names
  const cardsNames = getAllByTestId('char-name').map((char) => char.textContent)
  // Get all data names
  const dataNames = characterListMockData.map((char) => char.name)

  expect(dataNames).toEqual(cardsNames)
})

// Test ============================================================================
test('LoadingScreen is rendering when loading is true', () => {
  render(<CharactersList characters={characterListMockData} loading={true} />, {
    wrapper: StoreWrapper,
  })
  const loadScreen = screen.getByTestId('loading-screen')
  expect(loadScreen).toBeInTheDocument()
})

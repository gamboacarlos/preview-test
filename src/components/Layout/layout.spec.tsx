import '@testing-library/jest-dom'
import CharactersList from '../CharactersList/CharactersList'
import { render, screen } from '@testing-library/react'
import {
  characterListMockData,
  StoreWrapper,
} from '../../helpers/testingHelpers'
import Layout from './Layout'

// Test ============================================================================
test('MainContainer renders the passed component properly', () => {
  render(
    <Layout>
      <CharactersList characters={characterListMockData} loading={false} />
    </Layout>,
    { wrapper: StoreWrapper }
  )
  // Check NavBar
  const spanishLangButton = screen.getByTestId('lang-button-es')
  const englishLangButton = screen.getByTestId('lang-button-en')
  expect(spanishLangButton).toBeInTheDocument()
  expect(englishLangButton).toBeInTheDocument()

  // Check MainContainer
  const mainContainer = screen.getByTestId('main-container')
  expect(mainContainer).toBeInTheDocument()

  // Check CharactersList
  const charList = screen.getByTestId('char-list')
  expect(charList).toBeInTheDocument()

  // Check CharacterCard
  const cards = screen.getAllByTestId('char-card')
  expect(cards.length).toEqual(6)
})

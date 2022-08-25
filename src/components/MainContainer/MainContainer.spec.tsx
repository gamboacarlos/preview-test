import '@testing-library/jest-dom'
import CharactersList from '../CharactersList/CharactersList'
import { render, screen } from '@testing-library/react'
import MainContainer from './MainContainer'
import {
  characterListMockData,
  StoreWrapper,
} from '../../helpers/testingHelpers'

// Test ============================================================================
test('MainContainer renders the passed component properly', () => {
  render(
    <MainContainer>
      <CharactersList characters={characterListMockData} loading={false} />
    </MainContainer>,
    { wrapper: StoreWrapper }
  )

  const charList = screen.getByTestId('char-list')
  expect(charList).toBeInTheDocument()

  const list = screen.getAllByTestId('char-card')
  expect(list.length).toEqual(6)
})

import { StoreWrapper } from '../../helpers/testingHelpers'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Paginator from './Paginator'

// Test ============================================================================
test('Paginator component is rendering properly', () => {
  render(<Paginator />, { wrapper: StoreWrapper })
  const backButton = screen.getByTestId('back-button')
  const fowardButton = screen.getByTestId('foward-button')
  const currentPageDisplay = screen.getByTestId('current-page')

  expect(backButton).toBeInTheDocument()
  expect(fowardButton).toBeInTheDocument()
  expect(currentPageDisplay).toBeInTheDocument()
})

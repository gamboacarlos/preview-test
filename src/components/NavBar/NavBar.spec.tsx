import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { StoreWrapper } from '../../utils/testingUtils'
import NavBar from './NavBar'

// Test ============================================================================
test('NavBar is render his elements properly', () => {
  render(<NavBar />, { wrapper: StoreWrapper })
  const spanishLangButton = screen.getByTestId('lang-button-es')
  const englishLangButton = screen.getByTestId('lang-button-en')

  expect(spanishLangButton).toBeInTheDocument()
  expect(englishLangButton).toBeInTheDocument()
})

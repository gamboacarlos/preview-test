import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { store, StoreWrapper } from '../../utils/testingUtils'
import NavBar from './NavBar'

// Test ============================================================================
test('NavBar is render his elements', () => {
  render(<NavBar />, { wrapper: StoreWrapper })
  const spanishLangButton = screen.getByTestId('lang-button-es')
  const englishLangButton = screen.getByTestId('lang-button-en')

  expect(spanishLangButton).toBeInTheDocument()
  expect(englishLangButton).toBeInTheDocument()
})

// Test ============================================================================
test('Language buttons are changing the language properly', () => {
  render(<NavBar />, { wrapper: StoreWrapper })
  const spanishLangButton = screen.getByTestId('lang-button-es')
  const englishLangButton = screen.getByTestId('lang-button-en')

  fireEvent.click(spanishLangButton)
  expect(store.getState().currentLanguage).toEqual('es')

  fireEvent.click(englishLangButton)
  expect(store.getState().currentLanguage).toEqual('en')
})

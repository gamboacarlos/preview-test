import { CharacterData, CharacterQuote } from './commonTypes'

// State interfaces =====================================================
export interface AppState {
  loading: boolean
  characters: CharacterData[]
  currentCharacter: CharacterData[]
  quote: CharacterQuote[]
  currentPage: number
  currentOffset: number
  currentLanguage: string
}

// Actions interfaces ===================================================
export interface ActionStartDataFetch {
  type: string
  payload: null
}
export interface ActionStartSpecificCharacterFetch {
  type: string
  payload: number
}
export interface ActionSetAllCharacters {
  type: string
  payload: CharacterData[]
}
export interface ActionSetCurrentCharacterData {
  type: string
  payload: CharacterData
}
export interface ActionSetLoading {
  type: string
  payload: boolean
}
export interface ActionSetCurrentPage {
  type: string
  payload: number
}
export interface ActionSetCurrentOffset {
  type: string
  payload: number
}
export interface ActionSetCurrentLanguage {
  type: string
  payload: string
}
export type AppReducerActions =
  | ActionSetAllCharacters
  | ActionStartDataFetch
  | ActionSetLoading
  | ActionSetCurrentPage
  | ActionSetCurrentOffset
  | ActionSetCurrentLanguage
  | ActionSetCurrentCharacterData
  | ActionStartSpecificCharacterFetch

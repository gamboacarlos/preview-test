export interface CharacterData {
  char_id: number
  name: string
  birthday: string
  occupation: string[]
  img: string
  status: string
  nickname: string
  appearance: number[]
  portrayed: string
  category: string
}
export interface CardCharacterData {
  char_id: number
  name: string
  img: string
  status: string
  nickname: string
}
export interface CharacterQuote {
  quote_id: number
  quote: string
  author: string
  series: string
}
export type AllDataAvailable = CharacterData | CharacterData[] | CharacterQuote

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
  better_call_saul_appearance: number[]
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
export interface CharacterInfoProps {
  character: CharacterData
  quote: string
}
export interface CharacterListProps {
  characters: CardCharacterData[]
  loading: boolean
}
export type AllDataAvailable = CharacterData | CharacterData[] | CharacterQuote

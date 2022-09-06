import '@testing-library/jest-dom'
import { CharacterData } from '../../types/commonTypes'
import fetchData from './fetchData'
import { singleCharacterMockData } from '../testingUtils'

// Test ====================================================================
test('', async () => {
  const [data]: CharacterData[] = await fetchData('characters/1')
  expect(data).toEqual(singleCharacterMockData)
})

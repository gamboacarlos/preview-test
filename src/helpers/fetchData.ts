import { AllDataAvailable } from '../types/commonTypes'

// Base URL ========================================================================
const baseUrl = import.meta.env.VITE_APP_BASE_URL

// Fetcher =========================================================================
const fetchData = async (
  key: string
): Promise<AllDataAvailable | undefined> => {
  try {
    const response = await fetch(`${baseUrl as string}${key}`)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
  }
}
export default fetchData

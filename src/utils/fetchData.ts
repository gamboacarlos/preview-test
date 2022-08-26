import 'isomorphic-fetch'

// Base URL ========================================================================
const baseUrl = 'https://www.breakingbadapi.com/api/'

// Fetcher =========================================================================
const fetchData = async (key: string) => {
  try {
    const response = await fetch(`${baseUrl as string}${key}`)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
  }
}
export default fetchData

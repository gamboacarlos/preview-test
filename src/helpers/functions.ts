export const formatStringForQuoteQuery = (name: string) =>
  name.replace(' ', '+')

export const formatInfoArray = (arr: string[] | number[]) => arr.join(', ')

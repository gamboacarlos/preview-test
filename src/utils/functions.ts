export const formatStringForQuoteQuery = (name: string): string =>
  name.replace(' ', '+')

export const formatInfoArray = <T>(arr: T[]) => arr.join(', ')

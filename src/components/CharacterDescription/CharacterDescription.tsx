import { FC } from 'react'
import useTranslator from '../../hooks/useTranslator/useTranslator'
import { CharacterDescriptionProps } from '../../types/commonTypes'

const CharacterDescription: FC<CharacterDescriptionProps> = ({
  children,
  name,
  testId,
}) => {
  // Hooks =========================================================================
  const { translate } = useTranslator()

  return (
    <p>
      {translate(`characterInfo.${name}`)}
      <span data-testid={testId}>{children}</span>
    </p>
  )
}

export default CharacterDescription

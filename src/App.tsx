import { FC } from 'react'
import './App.css'
import Heading from './components/Heading/Heading'

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Heading>Testing Heading</Heading>
    </div>
  )
}

export default App

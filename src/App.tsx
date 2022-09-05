import { FC } from 'react'
import MainRoutes from './routes/MainRoutes'
import { Provider } from 'react-redux'
import mainStore from './store/store'

const App: FC = (): JSX.Element => {
  return (
    <Provider store={mainStore}>
      <MainRoutes />
    </Provider>
  )
}

export default App

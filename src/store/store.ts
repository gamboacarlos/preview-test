import { createStore, applyMiddleware } from 'redux'
import reduxSaga from 'redux-saga'
import appReducer from './reducer/app.reducer'
import appSaga from './sagas/appSaga'

const sagaMiddleware = reduxSaga()

const mainStore = {
  ...createStore(appReducer, applyMiddleware(sagaMiddleware)),
  runSaga: sagaMiddleware.run(appSaga),
}

export type MainStore = ReturnType<typeof appReducer>

export default mainStore

import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeView from '../Views/HomeView'

const MainRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </Router>
  )
}

export default MainRoutes

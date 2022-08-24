import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CharacterView from '../Views/CharacterView'
import HomeView from '../Views/HomeView'

const MainRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="character/:name" element={<CharacterView />} />
      </Routes>
    </Router>
  )
}

export default MainRoutes

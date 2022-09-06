import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CharacterView from '../views/CharacterView'
import HomeView from '../views/HomeView'

const MainRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="character/:id" element={<CharacterView />} />
      </Routes>
    </Router>
  )
}

export default MainRoutes

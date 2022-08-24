import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { FC, ReactNode } from 'react'
import appReducer from '../store/reducer/app.reducer'
import '../i18n'

export const store = createStore(appReducer)

// Store & Router wrapper ===============================================================
export const StoreWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Router>
    <Provider store={store}>{children}</Provider>
  </Router>
)

export const singleCharacterMockData = {
  char_id: 1,
  name: 'Walter White',
  birthday: '09-07-1958',
  occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
  img: 'https://images.amcnetworks.com/amc.com/wp-content/uploa...',
  status: 'Deceased',
  appearance: [1, 2, 3, 4, 5],
  nickname: 'Heisenberg',
  portrayed: 'Bryan Cranston',
  better_call_saul_appearance: [],
}

export const characterListMockData = [
  {
    char_id: 11,
    name: 'Domingo Molina',
    birthday: 'Unknown',
    occupation: ['Meth Distributor'],
    img: 'https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554',
    status: 'Deceased',
    nickname: 'Krazy-8',
    appearance: [1],
    portrayed: 'Maximino Arciniega',
    category: 'Breaking Bad',
    better_call_saul_appearance: [],
  },
  {
    char_id: 12,
    name: 'Tuco Salamanca',
    birthday: 'Unknown',
    occupation: ['Meth Distributor'],
    img: 'https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445',
    status: 'Deceased',
    nickname: 'Tuco',
    appearance: [1, 2],
    portrayed: 'Raymond Cruz',
    category: 'Breaking Bad, Better Call Saul',
    better_call_saul_appearance: [1, 2],
  },
  {
    char_id: 13,
    name: 'Marco & Leonel Salamanca',
    birthday: 'Unknown',
    occupation: ['Cartel Hitman'],
    img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg',
    status: 'Deceased',
    nickname: 'The Cousins',
    appearance: [3],
    portrayed: 'Luis & Daniel Moncada',
    category: 'Breaking Bad',
    better_call_saul_appearance: [],
  },
  {
    char_id: 14,
    name: 'Lydia Rodarte-Quayle',
    birthday: 'Unknown',
    occupation: ['Executive at Madrigal'],
    img: 'https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg',
    status: 'Deceased',
    nickname: 'Lydia',
    appearance: [5],
    portrayed: 'Laura Fraser',
    category: 'Breaking Bad',
    better_call_saul_appearance: [],
  },
  {
    char_id: 15,
    name: 'Todd Alquist',
    birthday: 'Unknown',
    occupation: ['Lab Assistant', 'Enforcer', 'Meth Cook'],
    img: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303',
    status: 'Deceased',
    nickname: 'Ricky Hitler',
    appearance: [5],
    portrayed: 'Jesse Plemons',
    category: 'Breaking Bad',
    better_call_saul_appearance: [],
  },
  {
    char_id: 16,
    name: 'Jane Margolis',
    birthday: 'Unknown',
    occupation: ['Tattoo Artist', 'Landlord'],
    img: 'https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653',
    status: 'Deceased',
    nickname: 'Apology Girl',
    appearance: [2],
    portrayed: 'Krysten Ritter',
    category: 'Breaking Bad',
    better_call_saul_appearance: [],
  },
]

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RouteTest from './components/RouteTest.js'

import  Home from './pages/Home.js'
import  Edit from './pages/Edit.js'
import  Diary from './pages/Diary.js'
import  New from './pages/New.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>HI</h2>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/edit' element={<Edit></Edit>}></Route>
          <Route path='/new' element={<New></New>}></Route>
          <Route path='/diary/:id' element={<Diary></Diary>}></Route>
        </Routes>
        <RouteTest></RouteTest>
      </div>
    </BrowserRouter>
  );
}

export default App;

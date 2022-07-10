import React, { useReducer, useRef } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import  Home from './pages/Home.js'
import  Edit from './pages/Edit.js'
import  Diary from './pages/Diary.js'
import  New from './pages/New.js'

const reducer = (state, action )=> {
  let newState = []
  switch(action.type) {
    case 'INIT':{
      return action.data;
    }
    case 'CREATE':{
      const newItem = {
        ...action.data
      }
      newState = [newItem, ...state]
      break
    }
    case 'REMOVE':{
      newState= state.filter((it)=> it.id !== action.targetId)
      break
    }
    case 'EDIT':{
      newState = state.map((it)=> it.id === action.targetId ? {...action.data} : it)
      break
    }
    default:
      return state
    }
    return newState
}

export const DiaryStateContext = React.createContext()
export const DiaryDispatchContext = React.createContext()

const dummyData = [
  {
    id:1,
    emotion : 1,
    content : '오늘의 일기 1번',
    date : 1657349256213
  },
  {
    id:2,
    emotion : 4,
    content : '오늘의 일기 2번',
    date : 1657349256214
  },  {
    id:3,
    emotion : 5,
    content : '오늘의 일기 3번',
    date : 1657349256216
  }
]

function App() {

  const [data, dispatch] = useReducer(reducer, dummyData)
  const dataId = useRef(0)

  // create
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id : dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion
    }
  })
    dataId.current += 1
  }

  //remove
  const onRemove = (targetId) => {
    dispatch({type:'REMOVE', targetId})
  }

  //edit
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/new' element={<New></New>}></Route>
              <Route path='/edit/:id' element={<Edit></Edit>}></Route>
              <Route path='/diary/:id' element={<Diary></Diary>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";

import MyHeader from './../components/MyHeader.js'
import DiaryList from './../components/DiaryList.js'

const Home = () => {
  const diaryList = useContext(DiaryStateContext)

  const [data, setData] = useState([])
  const [curDate , setCurDate] = useState(new Date())
  const headText = `${curDate.getFullYear()} 년 ${curDate.getMonth()+1}월`

  useEffect(()=> {
    if (diaryList.length >= 1) {
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime()

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0
    ).getTime()
    
    setData(diaryList.filter((it)=> firstDay <= it.date && it.date <= lastDay))
    }
  },[diaryList,curDate])

  useEffect(()=> {
    console.log(data)
  },[data])

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()))
  }
  const decreateMonth =() => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()))
  }

  return (
    <div>
      <MyHeader headText={headText}
         leftChild={<MyButton text={'<'} onClick={decreateMonth}></MyButton>}
         rightChild={<MyButton text={'>'} onClick={increaseMonth}></MyButton>}
      ></MyHeader>
      <DiaryList diaryList={data}></DiaryList>
    </div>
  )
}

export default Home;
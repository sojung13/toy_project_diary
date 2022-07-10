import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

const Diary = () => {

  const { id } = useParams()
  const diaryList = useContext(DiaryStateContext)
  const navigate = useNavigate()
  const [data, setData] = useState()

  useEffect(()=> {
    if(diaryList.length >= 1) {
      const targetDiary = diaryList.find((it)=> parseInt(it.id) === parseInt(id))
      console.log(targetDiary)
      if(targetDiary) {
        // 일기가 존재할 때
        setData(targetDiary)
      } else {
        // 일기가 없을 때
        alert('없는 일기입니다')
        navigate('/', {replace:true})
    }
    }
  },[id, diaryList])

  return (
    <div>
      <h1>Diary</h1>
      이곳은 ㅇ다이어링
    </div>
  )
}

export default Diary;
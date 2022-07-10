import {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from '../App';
import DiaryEditor from '../components/DiaryEditor';

const Edit = () => {
  const [originData, setOriginData ] = useState()
  const navigate = useNavigate()
  const {id} = useParams()

  const diaryList = useContext(DiaryStateContext)

  useEffect(()=> {
    if(diaryList.length >= 1) {
      const targetDiary = diaryList.find((it)=> parseInt(it.id) === parseInt(id))
      console.log(targetDiary)
      if (targetDiary) {
        // 일기가 존재할 때
        setOriginData(targetDiary)
      } else {
        // 일기가 없을 떄
        alert('존재하지 않는 일기입니다')
        navigate('/',{replace:true})
      }
    }
  },[id,diaryList])

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData}></DiaryEditor>}
    </div>
  )
}

export default Edit;
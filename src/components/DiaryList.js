import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DiaryItem from './DiaryItem'
import MyButton from './MyButton'

const sortOptionList = [
  {value:'latest', name:'최신순'},
  {value:'oldest', name:'오래된 순'}
]

const filterOptionList = [
  {value : 'all', name:'전부 다'},
  {value: 'good', name:'좋은 감정만'},
  {value: 'bad', name:'나쁜 감정만'},
]

const ControlMenu = ({value, onChange, optionList}) => {
  return <select value={value} onChange={(e)=> onChange(e.target.value)} className="ControlMenu">
    {optionList.map((it,idx)=> <option value={it.value} key={idx}>{it.name}</option>)}
  </select>
}

const DiaryList = ({diaryList}) => {
  const navigate = useNavigate()
  const [sortType, setSortType] = useState('latest')
  const [filter, setFilter] = useState('all')

  const getProcessedDiaryList = () => {
    const compare = (a,b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date)
      } else {
        return parseInt(a.date) - parseInt(b.date)
      }
    }

    const filterCallback = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3
      } else {
        return parseInt(item.emotion) > 3
      }
    }

    const copyList = JSON.parse(JSON.stringify(diaryList))
    const filteredList = filter === 'all' ? copyList : copyList.filter((it)=> filterCallback(it))
    const sortedList = filteredList.sort(compare)
    return sortedList
  }

  return (
    <div className='DiaryList'>
      <div className="menu_wrapper">
        <div className="left_col ControlMenu">
          <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList}></ControlMenu>
          <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList}></ControlMenu>
        </div>
        <div className='right_col'>
          <MyButton type={'positive'} text={'새 일기 쓰기'} onClick={()=> navigate('/new')}></MyButton>
        </div>
      </div>
      {getProcessedDiaryList().map((it)=> (
        <DiaryItem key={it.id} {...it}></DiaryItem>
      ))}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList : []
}

export default DiaryList
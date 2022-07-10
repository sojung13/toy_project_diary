import MyButton from "./MyButton"
import { useNavigate } from "react-router-dom"

const DiaryItem = ({...it}) => {
  const navigate = useNavigate()
  const strDate = new Date(parseInt(it.date)).toLocaleDateString()

  const goDetail = () => {
    navigate(`/diary/${it.id}`)
  }

  const goEdit = () => {
    navigate(`/edit/${it.id}`)
  }

  return (
    <div className="DiaryItem">
      <div className={["emotion_img_wrapper", `emotion_img_wrapper_${it.emotion}`].join(' ')}
        onClick={goDetail}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${it.emotion}.png`}></img>
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{it.content.slice(0,25)}</div>
      </div>
      <div className="btn_wrapper" onClick={goEdit}>
        <MyButton text={'수정하기'}></MyButton>
      </div>
    </div>
  )
}

export default DiaryItem
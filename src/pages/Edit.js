import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate()
  const [ searchParams, setSearchParams ] = useSearchParams()

  const id = searchParams.get('id')
  console.log('id::::', id)

  const mode = searchParams.get('mode')
  console.log('mode :: ', mode)

  return (
    <div>
      <h1>Edit</h1>
      에딧에딧
      <button onClick={()=> setSearchParams({who:'박소정'})}>QS바꾸기</button>
      <button onClick={()=> navigate("/home")}>HOME</button>
      <button onClick={()=>navigate(-1)}>뒤로가기</button>
    </div>
  )
}

export default Edit;
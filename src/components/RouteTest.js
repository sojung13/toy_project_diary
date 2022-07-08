import { Link } from 'react-router-dom'

const RouteTest = () => {
  return (<>
    <Link to={'/'}>HOME</Link>
    <br></br>
    <Link to={'/diary'}>DIARY</Link>
    <br></br>
    <Link to={'/new'}>NEW</Link>
    <br></br>
    <Link to={'/edit'}>EDIT</Link>
  </>)
}

export default RouteTest
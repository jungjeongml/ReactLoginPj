
import { useStore } from "../../store"
import { useNavigate } from "react-router-dom"
import  axios  from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000'
})

export const Login = () => {

  const submitHandler = async (e)=>{
    e.preventDefault()
    const {userid, userpw} = e.target
    const response = await request.post('/auth',{
      userid:userid.value,
      userpw:userpw.value
    }, {withCredentials: true})
    navigate('/')
  }

  const {state, dispatch} = useStore()
  const navigate = useNavigate()

  const handleClick = (e) => {
    dispatch({type:'LOGIN', payload: !state.isLogin})
  }


  return (
    <>
      <form onSubmit={submitHandler}>

        <div>email입력</div>
        <div>
          <input type="text" name="userid"></input>
        </div>
        <div>password입력</div>
        <input type="password" name="userpw"></input>
        <button onClick={handleClick}>로그인</button>

      </form>
    </>
  );
};

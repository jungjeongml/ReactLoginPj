import { useStore } from "../../store"
import { useNavigate } from "react-router-dom"



export const Login = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
  }

  const {state, dispatch} = useStore()
  const navigate = useNavigate()
  const handleClick = (e) => {
    dispatch({type:'LOGIN', payload: !state.isLogin})
    navigate('/')
  }

  return (
    <>
      <form onSubmit={submitHandler}>
      <div>
        email입력
      </div>
      <div>
        <input type='text' ></input>
      </div>
      <div>
        password입력
      </div>
      <input type='password' ></input>
      <button onClick={handleClick}>로그인</button>
      </form>
    </>
  )
}
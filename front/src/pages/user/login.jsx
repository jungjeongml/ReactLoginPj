import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const userid = e.target.userid.value;
    const userpw = e.target.userpw.value;

    const response = await axios.post(
      "http://localhost:3000/auth",
      {
        userid,
        userpw,
      },
      { withCredentials: true }
    );
    console.log("response:::", response);
    navigate("/");
  };

  const { state, dispatch } = useStore();
  const navigate = useNavigate();
  const handleClick = (e) => {
    dispatch({ type: "LOGIN", payload: !state.isLogin });
  };

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

import { useStore } from "../../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { dispatch } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "LOGOUT" });
    document.cookie = "token=; expires=Thu, 19 Jan 1995 03:13:01 UTC";
    navigate("/");
  }, []);
  return <></>;
};

import { createContext, useContext, useReducer } from "react"; 
import { rootReducer } from "./reducer";
import { usePersistedState } from "../hooks/usePersistedState";

export const Context = createContext()
export const useStore = ()=> useContext(Context)

export const StoreProvider = ({children})=>{

  const initialState = {
    isLogin:false,
    user:{},
  }
  

  const [state, dispatch] = useReducer(rootReducer,initialState)
  const [persistedState, setPersistedState] = usePersistedState('state', state)

  const globalState = {
    state: persistedState,
    dispatch: (action)=>{
      dispatch(action)
      setPersistedState(rootReducer(persistedState,action))
    }
  }
  
  return (
    <Context.Provider value={globalState}>
      {children}
    </Context.Provider>
  )
}
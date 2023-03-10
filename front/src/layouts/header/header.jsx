import {HeaderWrapper, Logo, Nav } from "./styled"
import {Navigation} from '../navigation/index'
import { useStore } from "../../store"
// <HeaderWrapper/> <Logo/> <Nav /> <Navigation />



export const Header = () => {
  const {state} = useStore()
  const category = [
    {path:'/', name:'Main'},
    {path:'/login', name:'Login', isLogin:false},
    {path:'/logout', name:'Logout', isLogin:true},
    {path:'/profile', name:'Profile', isLogin:true}
  ]

  return (
    <HeaderWrapper> 
      <Logo>Logo</Logo>
      <Nav >
        <Navigation category={category} isLogin={state.isLogin}/>
      </Nav>
    </HeaderWrapper>
    
  )
}
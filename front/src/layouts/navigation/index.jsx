import {memo} from 'react'
import { NavLink } from 'react-router-dom'


export const Navigation = memo(({category, isLogin})=>{
  // console.log(category)
  const categoryFilter = (item)=>{
    return !item.hasOwnProperty('isLogin') || item.isLogin === isLogin
  }

  const categoryMap = (item) => (
    <li key={item.path}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  )

  return <ul>{category.filter(categoryFilter).map(categoryMap)}</ul>
})

// const category = [
//   {path:'/', name:'Main'},
//   {path:'/login', name:'Login', isLogin:false},
//   {path:'/logout', name:'Logout', isLogin:true},
//   {path:'/profile', name:'Profile', isLogin:true}
// ]
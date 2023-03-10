import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Header } from './layouts/header';
import { StoreProvider } from './store';
import { Login } from './pages/user';


const App = () => {
  return (
    <StoreProvider>
    <BrowserRouter>
      <Routes> 
        <Route path='*' element={<Header />} />
      </Routes>
      <Routes>
        {/* <Route path='/' element={<Main />} /> */}
        <Route path='login' element={<Login />} />
        {/* <Route path='logout' element={<Logout />} /> */}
        {/* <Route path='profile' element={<Logout />} /> */}
      </Routes>
    </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

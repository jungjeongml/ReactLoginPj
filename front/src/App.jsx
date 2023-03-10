import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Header } from './layouts/header';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Header />} />
      </Routes>
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='logout' element={<Logout />} />
        <Route path='profile' element={<Logout />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;

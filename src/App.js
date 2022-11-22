import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Dorm from './pages/Dorm'
import Bus from './pages/Bus'

function App() {
  return (
      <div className='root-wrap'>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/dorm" element={<Dorm />} />
              <Route path="/bus" element={<Bus />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </div>
  );
}

export default App;

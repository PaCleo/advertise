import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Header/Header.jsx';
import './App.css';
import Body from './Body/Body.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import MyAccount from './MyAccount/MyAccount.jsx';
import Add from './MyAccount/Add/Add.jsx';
import Edit from './MyAccount/Edit/Edit.jsx';
import Footer from './Footer/Footer.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path='/login' element={<><Login /> <Footer/> </>} />

          <Route path='/' element={<><Header /> <Body /> <Footer/> </>} />

          <Route path='/register' element={<><Register /> <Footer/> </>} />

          <Route path='/myaccount' element={[<><Header /> <MyAccount /> <Footer/> </>]} />

          <Route path='/add-advertise' element={[<><Header /> <Add /> <Footer/> </>]} />

          <Route path='/edit-advertisement/:id' element={[<><Header/><Edit/> <Footer/> </>]}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Header/Header.jsx';
import './App.css';
import Body from './Body/Body.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import MyAccount from './MyAccount/MyAccount.jsx';
import Add from './MyAccount/Add/Add.jsx';
import Edit from './MyAccount/Edit/Edit.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path='/login' element={<Login />} />

          <Route path='/' element={<><Header /> <Body /></>} />

          <Route path='/register' element={<Register />} />

          <Route path='/myaccount' element={[<><Header /> <MyAccount /></>]} />

          <Route path='/add-advertise' element={[<><Header /> <Add /></>]} />

          <Route path='/edit-advertisement/:id' element={[<><Header/><Edit/></>]}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

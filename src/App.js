import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './components/customer/RegisterPage';
import Login from './components/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import CustomerDashboard from './components/customer/CustomerDashboard';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
          <Route path='/CustomerDashboard' element={<CustomerDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

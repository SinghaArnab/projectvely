import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminNav from './admin/components/AdminNav';
import AddProjects from './admin/pages/AddProjects';
import AddQuestion from './admin/pages/AddQuestion';
import AdminLogin from './admin/pages/AdminLogin';
import Category from './admin/pages/Category';
import Dashboard from './admin/pages/Dashboard';
import Projectlist from './admin/pages/Projectlist';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin/>}/>

          <Route path='/Dashboard' element={<AdminNav/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/Dashboard/AddQuestion' element={<AddQuestion/>}/>
          <Route path='/Dashboard/AddProjects' element={<AddProjects/>}/>
          <Route path='/Dashboard/showprojects' element={<Projectlist/>}/>
          <Route path='/Dashboard/Category' element={<Category/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminNav from './admin/components/AdminNav';
import AddProjects from './admin/pages/AddProjects';
import AddQuestion from './admin/pages/AddQuestion';
import AdminLogin from './admin/pages/AdminLogin';
import Category from './admin/pages/Category';
import Dashboard from './admin/pages/Dashboard';
import Projectlist from './admin/pages/Projectlist';
import './App.css';
import Navbar from "./Frontend/components/Navbar";
import Landing from "./Frontend/pages/Landing";
import Project from "./Frontend/pages/Project";
import InterviewPrep from "./Frontend/pages/InterviewPrep";
import Question from "./Frontend/pages/Question";
import Questionlist from './admin/pages/Questionlist';
import Footer from './Frontend/components/Footer';
import Profile from './admin/pages/Profile';
import UpdateProject from './admin/components/UpdateProject';
import Powerbranch from './admin/pages/Powerbranch';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navbar/>} >
          <Route index element={<Landing/>}/>
          <Route path="/Projects" element={<Project />} />
          <Route path="/InterviewPrep" element={<InterviewPrep />} />
          <Route path="/Question" element={<Question />} />
          </Route>


          <Route path='/adminlogin' element={<AdminLogin />} />

          <Route  exact path='/Dashboard' element={<AdminNav />}>
            <Route index element={<Dashboard />} />
            <Route path='/Dashboard/AddQuestion' element={<AddQuestion />} />
            <Route path='/Dashboard/AddProjects' element={<AddProjects />} />
            <Route path='/Dashboard/allquestion' element={<Questionlist />} />
            <Route path='/Dashboard/showprojects' element={<Projectlist />} />
            <Route path='/Dashboard/updateproject' element={<UpdateProject />} />
            <Route path='/Dashboard/Category' element={<Category />} />
            <Route path='/Dashboard/profile' element={<Profile />} />
            <Route path='/Dashboard/powerbranch' element={<Powerbranch/>} />
          </Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

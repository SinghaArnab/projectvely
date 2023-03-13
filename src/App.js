import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminNav from './admin/components/AdminNav';
import AddProjects from './admin/pages/AddProjects';
import AddQuestion from './admin/pages/AddQuestion';
import AdminLogin from './admin/pages/AdminLogin';
import Category from './admin/pages/Category';
import Dashboard from './admin/pages/Dashboard';
import Projectlist from './admin/pages/Projectlist';
import Questionlist from './admin/pages/Questionlist';
import Footer from './Frontend/components/Footer';
import Profile from './admin/pages/Profile';
import UpdateProject from './admin/components/UpdateProject';
import Powerbranch from './admin/pages/Powerbranch';
import './App.css';
import Navbar from "./Frontend/components/Navbar";
import Landing from "./Frontend/pages/Landing";
import Project from "./Frontend/pages/Project";
import InterviewPrep from "./Frontend/pages/InterviewPrep";
import Question from "./Frontend/pages/Question";
import ProjectDetails from './Frontend/pages/ProjectDetails';
import AllProjects from './Frontend/pages/AllProjects';
import Ourcourses from './Frontend/pages/Ourcourses';
import UserLogin from './Frontend/pages/UserLogin';
import CourseDetails from './Frontend/pages/CourseDetails';
import CourseCategory from './admin/pages/CourseCategory';
import ShowContain from './admin/pages/ShowContain';
import UpdateContent from './admin/components/UpdateContent';
import Userprofile from './Frontend/pages/Userprofile';
import FUpdateproject from './Frontend/components/FUpdateproject';
import FShowProjects from './Frontend/components/FShowProjects';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Navbar/>} >
          <Route index element={<Landing/>}/>
          <Route path="/Projects/:projectlevel" element={<Project />} />
          <Route path="ProjectsDet/:projectID" element={<ProjectDetails />} />
          <Route path="/InterviewPrep" element={<InterviewPrep />} />
          <Route path="/Question/:level?/:category?" element={<Question />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/courses" element={<Ourcourses />} />
          <Route path="/courses/:courseName" element={<CourseDetails />} />
          <Route path="/login" element={<UserLogin />} />


          <Route exact path="/userProfile" element={<Userprofile />}>
          <Route index element={<Profile />}/>
          <Route path="/userProfile/addProject" element={<AddProjects/>}/>
          <Route path="/userProfile/showProject" element={<FShowProjects/>}/>
          <Route path="/userProfile/updateproject" element={<FUpdateproject/>}/>
          </Route>

          
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
            <Route path='/Dashboard/Coursecategory' element={<CourseCategory />} />
            <Route path='/Dashboard/ShowCourseContain' element={<ShowContain />} />
            <Route path='/Dashboard/updatecontent' element={<UpdateContent />} />
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

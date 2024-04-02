import './App.css';
import { Routes, Route} from 'react-router-dom';

// 
//Pages
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardOne from './Pages/Dashboard/DashboardOne';
import DashboardTwo from './Pages/Dashboard/DashboardTwo';
import DashboardThree from './Pages/Dashboard/DashboardThree';

import AddProfessor from './Pages/Professors/AddProfessor';
import AllProfessors from './Pages/Professors/AllProfessors';
import AboutProfesser from './Pages/Professors/AboutProfesser';

import AddStudent from './Pages/Students/AddStudent';
import AllStudents from './Pages/Students/AllStudents';
import AboutStudent from './Pages/Students/AboutStudent';


import Signup from './Pages/signup';
import Signin from './Pages/Signin';



function App() {
  return (
    <div className="App">
    
      
    
    <Routes>
      <Route path='/' element={<Home />} />
     <Route path='/signin' element={<Signin />} /> 
      <Route path='/signup' element={<Signup />} />

      <Route path='/dashboard' element={<Dashboard />}/>
      
      <Route path="/dashboard/dashboard1" element={<DashboardOne />} />
      <Route path='/dashboard/dashboard2' element={<DashboardTwo />} />
      <Route path='/dashboard/dashboard3' element={<DashboardThree />} />

      <Route path='/all_professor' element={<AllProfessors />} />
      <Route path='/add_professor' element={<AddProfessor />} />
      <Route path='/about_professor' element={<AboutProfesser />} />
      
      <Route path='/all_student' element={<AllStudents />} />
      <Route path='/add_student' element={<AddStudent />} />
      <Route path='/about_student' element={<AboutStudent />} />

      
      
    </Routes>
    </div>
  );
}

export default App;

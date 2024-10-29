import logo from './kl logo.png';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Faculty from './Components/Faculty';
import Student from './Components/Student';
import Course from './Components/Course';
import Timetable from './Components/Timetable';
import Feedbackform from './Components/Feedbackform';
import Attendance from './Components/Attendance';
import Schedule from './Components/Schedule';




function App() {
  return (
    <div className="App">
      <img src={logo} alt="kl logo"/>
      <Header/>
      <Faculty/>
      <Student/>
      <Course/>
     <Timetable/>
    <Attendance/>
    <Feedbackform/>
    <Schedule/>
  
    <Footer/>
    
    

   
    </div>

  );
}

export default App;

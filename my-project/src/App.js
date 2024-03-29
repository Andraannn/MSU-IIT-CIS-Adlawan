import './App.css'
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Accordion from './routes/accordion'
import AddUser from './routes/addUser'
import Testing from './routes/Test';
import Doctor from './routes/doctor';
import Assessment from './routes/assessment';
import PastMedical from './routes/pastmedical';
import FamilyHistory from './routes/familyhistory';
import Vitals from './routes/vitals';
import Social from './routes/social';
import PersonalInformation from './routes/personal';
import NewAccordion from './routes/new';
import DataGrid from './routes/datagrid';
import Dashboard from './routes/dashboard';
import TestingCode from './routes/testing';
import StudentPatients from './routes/student_widget';
import FacultyStaff from './routes/facultystaff_widget';
import TotalAppointments from './routes/totalappoint_widget';
import Lightbox from './routes/lightbox';
import Lightbox_Final from './routes/lightbox_final';

function App() {
  
  return (
  <div className='wrapper'>
    <Routes>
      <Route path="/accordion" element={<Accordion></Accordion>}></Route>
      <Route path="/add_user" element={<AddUser></AddUser>}></Route>
      <Route path="/testing" element={<Testing></Testing>}></Route>
      <Route path="/doctor" element={<Doctor></Doctor>}></Route>
      <Route path="/assessment" element={<Assessment></Assessment>}></Route>
      <Route path="/pastmedical" element={<PastMedical></PastMedical>}></Route>
      <Route path="/familyhistory" element={<FamilyHistory></FamilyHistory>}></Route>
      <Route path="/vitals" element={<Vitals></Vitals>}></Route>
      <Route path="/socialhistory" element={<Social></Social>}></Route>
      <Route path="/personalinfo" element={<PersonalInformation></PersonalInformation>}></Route>
      <Route path="/newaccordion" element={<NewAccordion></NewAccordion>}></Route>
      <Route path="/datagrid" element={<DataGrid></DataGrid>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/testingcode" element={<TestingCode></TestingCode>}></Route>
      <Route element={<StudentPatients></StudentPatients>}></Route>
      <Route element={<FacultyStaff></FacultyStaff>}></Route>
      <Route element={<TotalAppointments></TotalAppointments>}></Route>
      <Route element={<Lightbox></Lightbox>}></Route>
      <Route path="/lightbox" element={<Lightbox_Final></Lightbox_Final>}></Route>


    </Routes>
  </div>
  )
}

export default App 
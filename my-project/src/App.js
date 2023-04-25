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

    </Routes>
  </div>
  )
}

export default App 
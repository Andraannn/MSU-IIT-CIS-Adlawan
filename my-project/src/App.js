import './App.css'
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Accordion from './routes/accordion'
import AddUser from './routes/addUser'
import SimpleModal from './routes/modal'
import AddUserModal from './routes/AddUserModal';
import Testing from './routes/Test';
import Doctor from './routes/doctor';
import Assessment from './routes/assessment';
import PastMedical from './routes/pastmedical';
import FamilyHistory from './routes/familyhistory';

function App() {
  
  return (
  <div className='wrapper'>
    <Routes>
      <Route path="/accordion" element={<Accordion></Accordion>}></Route>
      <Route path="/add_user" element={<AddUser></AddUser>}></Route>
      <Route path="/test" element={<SimpleModal></SimpleModal>}></Route>
      <Route path="/modal_adduser" element={<AddUserModal></AddUserModal>}></Route>
      <Route path="/testing" element={<Testing></Testing>}></Route>
      <Route path="/doctor" element={<Doctor></Doctor>}></Route>
      <Route path="/assessment" element={<Assessment></Assessment>}></Route>
      <Route path="/pastmedical" element={<PastMedical></PastMedical>}></Route>
      <Route path="/familyhistory" element={<FamilyHistory></FamilyHistory>}></Route>
      
    </Routes>
  </div>
  )
}

export default App 
import './App.css'
import React, { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Accordion from './routes/accordion'
import AddUser from './routes/addUser'
import SimpleModal from './routes/modal'
import AddUserModal from './routes/AddUserModal';

function App() {
  
  return (
  <div className='wrapper'>
    <Routes>
      <Route path="/accordion" element={<Accordion></Accordion>}></Route>
      <Route path="/add_user" element={<AddUser></AddUser>}></Route>
      <Route path="/test" element={<SimpleModal></SimpleModal>}></Route>
      <Route path="/modal_adduser" element={<AddUserModal></AddUserModal>}></Route>
    </Routes>
  </div>
  )
}

export default App 
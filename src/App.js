import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import FnComp from './components/FnComp'
import ClassComp from './components/ClassComp'
import CarProp from './components/CarProp'
import Garage from './components/Garage';
import Shell from './components/Shell';
import StudentTable from './components/StudentTable';


function App() {
  return (
    <>
    <center>
      <ClassComp />
      <hr />
      <FnComp />
      <hr />
      <CarProp color="red" />
      <hr />
      <Garage />
      <hr />
      <Shell />
      <hr />
      <StudentTable />
      <hr />
      </center>
    </>
  )
}




export default App;

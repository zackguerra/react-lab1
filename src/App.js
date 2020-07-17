import React, { useState, useEffect } from "react";
import "../src/App.css";
import { render } from "@testing-library/react";
import ChallengeOne from "./ChallengeOne";
import StudentList from "./StudentList";



export default function App() {
  const studentList = ['Zack Guerra', 'Lucas Gerhardt', 'Juan Carlos', 'Fernando Correa', 'Tugba Simsir', 'Shinya Kimura', 'Ion Gutu', 'Luciano Darela', 'Katsuya Mizusawa', 'Sachiko', 'Suichiro Tanoue'];

  return (
  <>
  <ChallengeOne />
  <StudentList list={studentList} />
  </>
  )  
}











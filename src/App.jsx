import Aside from "./components/common/Aside";
import Header from "./components/common/Header";
import StudentList from "./components/StudentList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import StudentInfo from "./components/StudentInfo";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BASE_API_URL;

function App() {
  
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${URL}/students`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <>
      <Header />
      <Aside students={students}/>
      <Routes>
        <Route path="/" element={<Home students={students}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/student-info" element={<StudentInfo />} />
      </Routes>
    </>
  );
}

export default App;

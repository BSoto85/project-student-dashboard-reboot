import React from "react";
import StudentCard from "./StudentCard";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BASE_API_URL;

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${URL}/students`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
console.log(students)
  return (
    <div>
      {students.map(student => {
       return <StudentCard key={student.id}  student={student}/> 
      }) }
      
    </div>
  );
};

export default StudentList;

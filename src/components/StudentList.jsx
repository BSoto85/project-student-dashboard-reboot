import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ filteredStudents }) => {
  return (
    <div>
      {filteredStudents.map((student) => {
        return <StudentCard key={student.id} student={student} />;
      })}
    </div>
  );
};

export default StudentList;

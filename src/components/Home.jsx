import React from "react";
import StudentList from "./StudentList";

const Home = ({ students, filteredStudents, cohortHeading }) => {
  return (
    <div>
      <h2>{cohortHeading}</h2>
      <h3>Total Students: {filteredStudents.length}</h3>
      <StudentList students={students} filteredStudents={filteredStudents} />
    </div>
  );
};

export default Home;

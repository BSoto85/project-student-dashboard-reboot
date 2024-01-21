import React from "react";
import StudentList from "./StudentList";

const Home = ({ students, filteredSudents }) => {
  return (
    <div>
      <StudentList students={students} filteredSudents={filteredSudents} />
    </div>
  );
};

export default Home;

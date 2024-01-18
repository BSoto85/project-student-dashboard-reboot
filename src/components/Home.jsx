import React from "react";
import StudentList from "./StudentList"


const Home = ({ students }) => {
  return <div><StudentList students={students}/></div>;
};

export default Home;

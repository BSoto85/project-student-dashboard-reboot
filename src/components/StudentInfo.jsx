import React from "react";
import StudentCard from "./StudentCard";
import ProgressList from "./ProgressList";
import CommentForm from "./CommentForm";

const StudentInfo = () => {
  return (
    <div>
      <StudentCard />
      <ProgressList />
      <CommentForm />
    </div>
  );
};

export default StudentInfo;

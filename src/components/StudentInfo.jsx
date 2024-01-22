import React from "react";
import StudentCard from "./StudentCard";
import ProgressList from "./ProgressList";
import CommentForm from "./CommentForm";

const StudentInfo = ({ students }) => {
  return (
    <div>
      <section>
        <StudentCard students={students} />
      </section>
      <section>
        <ProgressList students={students} />
      </section>
      <section>
        <CommentForm students={students} />
      </section>
    </div>
  );
};

export default StudentInfo;

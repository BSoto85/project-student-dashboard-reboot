import React from "react";
import { useParams } from "react-router-dom";
import StudentCard from "./StudentCard";
import ProgressList from "./ProgressList";
import CommentForm from "./CommentForm";

const StudentInfo = ({ students }) => {
  const { studentId } = useParams();
  const student = students.find((s) => s.id.toString() === studentId);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <section>
        <StudentCard student={student} />
      </section>
      <section>
        <ProgressList student={student} />
      </section>
      <section>
        <CommentForm student={student} />
      </section>
    </div>
  );
};

export default StudentInfo;

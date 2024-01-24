import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
  const { profilePhoto, names, username, dob } = student;
  const { preferredName, middleName, surname } = names;

  const birthdayFormatting = (dob) => {
    const studentBDay = new Date(dob);
    return studentBDay.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isOnTrack = (student) => {
    const { certifications, codewars } = student;

    const certificationsCompleted =
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview;

    const codeWarsScoreOver850 = codewars.current.total > 850;

    return certificationsCompleted && codeWarsScoreOver850;
  };

  const studentStatus = isOnTrack(student);

  return (

  <Link to={`/student-info/${student.id}`} className=" col text-decoration-none">
   
  <div className="justify-content-start  mt-2  " >
    <div className=" card border-4 border-primary text-bg-dark  align-items-start" style={{ width: "520px"}}>
      <div className="row    ">
        <div className="col">
          <img src={profilePhoto} className="img-fluid rounded-start h-100 w-100" alt={`${preferredName} ${surname}`} />
        </div>
        <div className="col col-md-8">
          <div className="card-body h-80">
            <h5 className="card-title">{`${preferredName} ${middleName} ${surname}`}</h5>
            <p className="card-text">Email: {username}</p>
            <p className="card-text">Birthday: {dob}</p>
             {studentStatus && (
                <p className="text-primary">On track to Graduate</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StudentCard;

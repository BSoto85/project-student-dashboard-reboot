import React from "react";



const StudentCard = ({student}) => {
  const { profilePhoto, names, username, dob } = student;
  const { preferredName, middleName, surname } = names;


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

  const studentStatus = isOnTrack(student)
console.log("Student Status:", studentStatus);

  return (
  
  <div className="d-flex justify-content-start">
    <div className="card border-danger text-bg-dark mb-3 " style={{ width: "540px", marginLeft: "20px" }}>
      <div className="row g-0 h-100">
        <div className="col-md-4">
          <img src={profilePhoto} className="img-fluid rounded-start h-100 w-100" alt={`${preferredName} ${surname}`} />
        </div>
        <div className="col-md-8">
          <div className="card-body h-100">
            <h5 className="card-title">{`${preferredName} ${middleName} ${surname}`}</h5>
            <p className="card-text">Username: {username}</p>
            <p className="card-text">Birthday: {dob}</p>
             {studentStatus && (
                <p><a href="#" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">On track to Graduate</a></p>
                )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default StudentCard;

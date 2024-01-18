import React from "react";

const StudentCard = ({student}) => {
  const { profilePhoto, names, username, dob } = student;
  const { preferredName, middleName, surname } = names;
  return (<div>
    <img src={profilePhoto} alt={`${preferredName} ${surname}`} />

  <p>{preferredName} {middleName} {surname}</p>
  <p>{username}</p>
  <p>Birthday: {dob}</p>


  </div>)
};

export default StudentCard;

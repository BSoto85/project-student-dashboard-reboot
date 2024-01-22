import React from "react";

const Aside = ({ students }) => {
  const fullCohortList = students.map((student) => {
    return student.cohort.cohortCode;
  });

  const cohortList = [...new Set(fullCohortList)];

  return (
    <div className="float-end" style={{ width: "350px", marginRight: "20px"}}>
      <h3>Choose a Class By Start Date</h3>
      <button>Sort {} By Year</button>
      <ul className="list-group">
        {cohortList.map((cohort) => {
          const cohortSeason = cohort.slice(0, cohort.length - 4);
          const cohortYear = cohort.slice(-4);
          return (
            <li key={cohort} className="list-group-item list-group-item list-group-item-primary">
              {cohortSeason} {cohortYear}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Aside;

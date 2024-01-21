import React from "react";
import { useState } from "react";

const Aside = ({ students, handleOnClick }) => {
  // const [cohorts, setCohorts] = useState([cohortList]);

  const fullCohortList = students.map((student) => {
    return student.cohort.cohortCode;
  });

  const cohortList = [...new Set(fullCohortList)];

  // const handleSort = () => {
  //   setCohorts(cohorts.sort());
  // };

  return (
    <div>
      <h3>Choose a Class By Start Date</h3>
      <button>Sort {} By Year</button>
      {/* <button onClick={handleSort}>Sort {} By Year</button> */}
      <ul>
        {cohortList.map((cohort) => {
          const cohortSeason = cohort.slice(0, cohort.length - 4);
          const cohortYear = cohort.slice(-4);
          const formattedCohort = `${cohortSeason} ${cohortYear}`;
          return (
            <li onClick={() => handleOnClick(cohort)} key={cohort}>
              {formattedCohort}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Aside;

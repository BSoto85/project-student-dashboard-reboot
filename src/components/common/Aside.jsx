import React from "react";

const Aside = ({ students, handleOnClick }) => {
  const fullCohortList = students.map((student) => {
    return student.cohort.cohortCode;
  });

  const cohortList = [...new Set(fullCohortList)];

  return (
    <div>
      <h3>Choose a Class By Start Date</h3>
      <button>Sort {} By Year</button>
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

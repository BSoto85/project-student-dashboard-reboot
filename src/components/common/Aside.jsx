import React from "react";

const Aside = ({ students }) => {
  const fullCohortList = students.map((student) => {
    return student.cohort.cohortCode;
  });

  const cohortList = [...new Set(fullCohortList)];
  console.log(cohortList);
  return (
    <div>
      <h3>Choose a Class By Start Date</h3>
      <button>Sort {} By Year</button>
      <section>
        {/* {cohortList.map(cohort => {
        const 
      })} */}
      </section>
    </div>
  );
};

export default Aside;

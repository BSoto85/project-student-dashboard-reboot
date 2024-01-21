import React from "react";
import { useState } from "react";

const Aside = ({ students, handleOnClick }) => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [orderedList, setOrderedList] = useState([]);

  const fullCohortList = students.map((student) => {
    return student.cohort.cohortCode;
  });

  const cohortList = [...new Set(fullCohortList)];

  const handleSort = () => {
    if (orderStatus === true) {
      setSortOrder("Ascending");
      const ascendingCohortList = cohortList.toSorted();
      setOrderedList(ascendingCohortList);
    } else {
      const descendingCohortList = cohortList.toSorted().reverse();
      setSortOrder("Descending");
      setOrderedList(descendingCohortList);
    }
    setOrderStatus(!orderStatus);
    return sortOrder;
  };

  return (
    <div>
      <h3>Choose a Class By Start Date</h3>
      <button onClick={handleSort}>Sort {sortOrder} By Year</button>
      <ul>
        {orderedList.map((cohort) => {
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

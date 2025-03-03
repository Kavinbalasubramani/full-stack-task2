import React from "react";

const Course = ({ name, lessons, startDate, completed, duration }) => {
  return (
    <tr>
      <td>{name} <br /><small>{lessons} Lessons</small></td>
      <td>{startDate}</td>
      <td>{completed}</td>
      <td>{duration}</td>
    </tr>
  );
};

export default Course;

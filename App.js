import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import Course from './Course';


function App() {
 
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      axios.get("/courses").then((response) => {
        setCourses(response.data);
      });
    }, []);
  
    return (
      <div className="course-table">
        <h2>My Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Start Date</th>
              <th>Lesson Completed</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <Course key={course.id} {...course} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };


  

export default App;

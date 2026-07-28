import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: 'React Development', duration: '3 months', fee: 12000, level: 'Intermediate' },
    { id: 2, name: 'Node.js Backend', duration: '2 months', fee: 10000, level: 'Intermediate' },
    { id: 3, name: 'Full Stack JavaScript', duration: '6 months', fee: 25000, level: 'Advanced' },
    { id: 4, name: 'HTML & CSS Basics', duration: '1 month', fee: 3000, level: 'Beginner' },
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <h2 style={{ color: '#27ae60' }}>Course Details</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Fee (INR)</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.duration}</td>
              <td>{course.fee}</td>
              <td>{course.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseDetails;
import React from 'react';

function CalculateScore(props) {
  const { Name, School, Total, goal } = props;
  const average = (Total / goal) * 100;

  return (
    <div className="student-card">
      <h2>Student Score Report</h2>
      <div className="student-info">
        <p><strong>Name:</strong> {Name}</p>
        <p><strong>School:</strong> {School}</p>
        <p><strong>Total Score:</strong> {Total}</p>
        <p><strong>Goal:</strong> {goal}</p>
        <p className="average"><strong>Average Score:</strong> {average.toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default CalculateScore;
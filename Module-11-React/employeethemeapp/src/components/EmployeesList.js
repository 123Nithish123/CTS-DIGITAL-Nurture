import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
  const employees = [
    { id: 101, name: 'Alice Johnson', role: 'Frontend Developer', department: 'Engineering' },
    { id: 102, name: 'Bob Williams', role: 'Backend Developer', department: 'Engineering' },
    { id: 103, name: 'Charlie Brown', role: 'UX Designer', department: 'Design' },
    { id: 104, name: 'Diana Miller', role: 'Project Manager', department: 'Management' },
    { id: 105, name: 'Edward Davis', role: 'QA Engineer', department: 'Quality Assurance' },
  ];

  return (
    <div>
      <h2>Employees List</h2>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeesList;
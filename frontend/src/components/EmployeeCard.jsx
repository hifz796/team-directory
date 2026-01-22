export default function EmployeeCard({ employee }) {
  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <div className="employee-card">
      <div className="card-header">
        <div className="avatar">
          {getInitials(employee.firstName, employee.lastName)}
        </div>
        <div>
          <h3>{employee.fullName}</h3>
          <p className="role">{employee.role}</p>
        </div>
      </div>
      
      <div className="card-body">
        <p><strong>Department:</strong> {employee.department || 'N/A'}</p>
        <p><strong>Email:</strong> <a href={`mailto:${employee.email}`}>{employee.email}</a></p>
        <p><strong>Phone:</strong> {employee.phoneNumber}</p>
        <p><strong>Hire Date:</strong> {new Date(employee.hireDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
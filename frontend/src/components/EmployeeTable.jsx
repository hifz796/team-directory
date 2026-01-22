/**
 * EmployeeTable Component
 * Displays employees in a table format (alternative view)
 */
export default function EmployeeTable({ employees }) {
  const formatPhoneNumber = (phone) => {
    if (!phone) return 'N/A';
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Hire Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="name-cell">
                <div className="avatar-small">
                  {employee.firstName.charAt(0)}{employee.lastName.charAt(0)}
                </div>
                <span>{employee.fullName}</span>
              </td>
              <td>{employee.role}</td>
              <td>{employee.department || 'N/A'}</td>
              <td>
                <a href={`mailto:${employee.email}`} className="email-link">
                  {employee.email}
                </a>
              </td>
              <td>
                <a href={`tel:${employee.phoneNumber}`}>
                  {formatPhoneNumber(employee.phoneNumber)}
                </a>
              </td>
              <td>
                {new Date(employee.hireDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
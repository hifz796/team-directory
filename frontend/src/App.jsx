import { useEmployees } from './hooks/useEmployees';
import SearchBar from './components/SearchBar';
import EmployeeCard from './components/EmployeeCard';
import './App.css';

function App() {
  const { employees, loading, error, handleSearch, refresh } = useEmployees();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Team Directory</h1>
        <p>Find and connect with your colleagues</p>
      </header>

      <main className="main-content">
        <SearchBar onSearch={handleSearch} />

        {loading && <div className="loading">Loading employees...</div>}

        {error && (
          <div className="error">
            <p>{error}</p>
            <button onClick={refresh}>Try Again</button>
          </div>
        )}

        {!loading && !error && employees.length === 0 && (
          <div className="empty">No employees found</div>
        )}

        {!loading && !error && employees.length > 0 && (
          <>
            <p className="count">Found {employees.length} employees</p>
            <div className="employee-grid">
              {employees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
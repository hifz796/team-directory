import { useState, useEffect, useCallback } from 'react';
import { fetchEmployees } from '../services/api';

export function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadEmployees = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchEmployees();
      
      if (response.success) {
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } else {
        throw new Error(response.error || 'Failed to fetch employees');
      }
    } catch (err) {
      setError(err.message);
      setEmployees([]);
      setFilteredEmployees([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  const handleSearch = useCallback((term) => {
    if (!term.trim()) {
      setFilteredEmployees(employees);
      return;
    }

    const lowercased = term.toLowerCase();
    const filtered = employees.filter(employee => 
      employee.firstName.toLowerCase().includes(lowercased) ||
      employee.lastName.toLowerCase().includes(lowercased) ||
      employee.role.toLowerCase().includes(lowercased) ||
      (employee.department && employee.department.toLowerCase().includes(lowercased))
    );

    setFilteredEmployees(filtered);
  }, [employees]);

  return {
    employees: filteredEmployees,
    loading,
    error,
    handleSearch,
    refresh: loadEmployees,
  };
}
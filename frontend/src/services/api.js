const API_BASE_URL = 'http://localhost:8888/api/employees.cfc?method=getEmployees';

export async function fetchEmployees(searchTerm = '') {
  try {
    const url = searchTerm
      ? `${API_BASE_URL}&search=${encodeURIComponent(searchTerm)}`
      : API_BASE_URL;

    const response = await fetch(url);
    const data = await response.json();

    return {
      success: data.success ?? false,
      data: data.data ?? [],
      error: data.error ?? null,
    };
  } catch (err) {
    return { success: false, data: [], error: err.message };
  }
}

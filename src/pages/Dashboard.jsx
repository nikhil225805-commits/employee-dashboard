
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        return response.json();
      })
      .then((data) => setEmployees(data))
      .catch(() => setError("Unable to load employee data."))
      .finally(() => setLoading(false));
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    [employee.id, employee.name, employee.email].some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  if (loading) {
    return <p className="text-center mt-5">Loading employees...</p>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h1 className="mb-2">Employee Dashboard</h1>
        <p className="text-secondary">
          Employee information from the external API
        </p>

        <input
          type="search"
          className="form-control mb-4"
          placeholder="Search by ID, name or email..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEmployees.length === 0 && (
            <p className="text-center">No employees found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

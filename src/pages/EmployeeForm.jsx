
import { useState } from "react";

export default function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Employee form validated successfully!");
  }

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h1 className="mb-2">Employee Form</h1>
        <p className="text-secondary">
          Enter employee details below.
        </p>

        {message && (
          <div className="alert alert-success">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="designation">
              Designation
            </label>
            <input
              id="designation"
              name="designation"
              className="form-control"
              value={form.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              name="location"
              className="form-control"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label" htmlFor="salary">Salary</label>
            <input
              id="salary"
              name="salary"
              type="number"
              min="0"
              className="form-control"
              value={form.salary}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Form
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary ms-2"
            onClick={() => {
              setForm({
                name: "",
                designation: "",
                location: "",
                salary: "",
              });
              setMessage("");
            }}
          >
            Clear
          </button>
        </form>

        <p className="small text-secondary mt-3 mb-0">
          This demo validates the form locally and does not post data.
        </p>
      </div>
    </div>
  );
}

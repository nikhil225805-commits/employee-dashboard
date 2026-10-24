
import { NavLink, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/EmployeeForm";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            Employee Portal
          </NavLink>

          <div className="navbar-nav ms-auto">
            <NavLink end className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/employee-form">
              Employee Form
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
    </>
  );
}

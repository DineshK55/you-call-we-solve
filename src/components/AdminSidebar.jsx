import { NavLink, useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import app from "../firebase";
import "./AdminSidebar.css";

function AdminSidebar() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  return (
    <header className="admin-header">
      <div className="admin-header-container">

        {/* Logo */}
        <div className="admin-header-logo">
          <h2>You Call We Solve</h2>
          <span>ADMIN PANEL</span>
        </div>

        {/* Navigation */}
        <nav className="admin-header-nav">
          <NavLink to="/admin/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/admin/manage-works">
            Works
          </NavLink>

          <NavLink to="/admin/add-work" className="admin-add-work-link">
            + Add Work
          </NavLink>
        </nav>

        {/* Logout */}
        <button
          type="button"
          className="admin-logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </header>
  );
}

export default AdminSidebar;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [totalWorks, setTotalWorks] = useState(0);

  useEffect(() => {
    const fetchTotalWorks = async () => {
      try {
        const worksSnapshot = await getDocs(
          collection(db, "works")
        );

        setTotalWorks(worksSnapshot.size);
      } catch (error) {
        console.error(
          "Failed to fetch total works:",
          error
        );
      }
    };

    fetchTotalWorks();
  }, []);

  return (
    <section className="admin-dashboard">
      <div className="admin-dashboard-container">

        {/* Dashboard Header */}
        <div className="admin-dashboard-header">

          <div>
            <p className="admin-dashboard-eyebrow">
              ADMIN PANEL
            </p>

            <h1>Dashboard</h1>

            <span>
              Manage your completed projects and website
              content from one place.
            </span>
          </div>

          <Link
            to="/admin/add-work"
            className="admin-dashboard-primary-btn"
          >
            + Add New Work
          </Link>

        </div>


        {/* Main Statistics */}
        <div className="admin-dashboard-stats">

          <div className="admin-stat-card admin-stat-card-large">

            <div className="admin-stat-top">
              <span>Total Works</span>

              <div className="admin-stat-icon">
                W
              </div>
            </div>

            <strong>{totalWorks}</strong>

            <p>
              Completed projects currently stored
              in your portfolio.
            </p>

          </div>


          <div className="admin-stat-card">

            <div className="admin-stat-top">
              <span>Portfolio</span>

              <div className="admin-stat-icon">
                ✓
              </div>
            </div>

            <strong>Active</strong>

            <p>
              Your completed work portfolio is
              connected and ready.
            </p>

          </div>

        </div>


        {/* Quick Actions */}
        <section className="admin-dashboard-section">

          <div className="admin-section-heading">
            <div>
              <p>QUICK ACTIONS</p>
              <h2>Manage your website</h2>
            </div>
          </div>


          <div className="admin-action-grid">

            <Link
              to="/admin/add-work"
              className="admin-action-card"
            >
              <div className="admin-action-icon">
                +
              </div>

              <div className="admin-action-content">
                <h3>Add New Work</h3>

                <p>
                  Add a completed project with
                  images and project details.
                </p>
              </div>

              <span className="admin-action-arrow">
                →
              </span>
            </Link>


            <Link
              to="/admin/manage-works"
              className="admin-action-card"
            >
              <div className="admin-action-icon">
                W
              </div>

              <div className="admin-action-content">
                <h3>Manage Works</h3>

                <p>
                  View, edit and remove completed
                  projects from your portfolio.
                </p>
              </div>

              <span className="admin-action-arrow">
                →
              </span>
            </Link>

          </div>

        </section>


        {/* Portfolio Overview */}
        <section className="admin-dashboard-overview">

          <div className="admin-overview-content">

            <p className="admin-overview-label">
              PORTFOLIO OVERVIEW
            </p>

            <h2>
              Your completed work,
              <br />
              presented professionally.
            </h2>

            <p>
              Keep your project portfolio updated with
              real completed work. Add new projects,
              update existing ones, and keep the website
              content fresh for your customers.
            </p>

          </div>


          <div className="admin-overview-stat">

            <span>Projects</span>

            <strong>{totalWorks}</strong>

            <small>
              Currently in portfolio
            </small>

          </div>

        </section>

      </div>
    </section>
  );
}

export default AdminDashboard;
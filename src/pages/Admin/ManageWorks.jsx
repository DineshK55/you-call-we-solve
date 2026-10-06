import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "../../firebase";

import "./ManageWorks.css";

function ManageWorks() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const worksQuery = query(
  collection(db, "works"),
  orderBy("createdAt", "desc")
);

const snapshot = await getDocs(worksQuery);

        const worksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setWorks(worksData);
      } catch (error) {
        console.error("Failed to fetch works:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const handleDelete = async (work) => {
  const confirmed = window.confirm(
    `Are you sure you want to delete "${work.title}"?`
  );

  if (!confirmed) {
    return;
  }

  try {
    // Delete Before images
    if (work.beforeImages?.length > 0) {
      for (const imageUrl of work.beforeImages) {
        try {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        } catch (error) {
          console.error("Failed to delete Before image:", error);
        }
      }
    }

        // Delete After images
    if (work.afterImages?.length > 0) {
      for (const imageUrl of work.afterImages) {
        try {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        } catch (error) {
          console.error("Failed to delete After image:", error);
        }
      }
    }

    // Delete thumbnail
    if (work.thumbnailUrl) {
      try {
        const thumbnailRef = ref(storage, work.thumbnailUrl);
        await deleteObject(thumbnailRef);
      } catch (error) {
        console.error("Failed to delete thumbnail:", error);
      }
    }

    // Delete Firestore document
    await deleteDoc(doc(db, "works", work.id));

    // Remove deleted work from screen immediately
    setWorks((currentWorks) =>
      currentWorks.filter((item) => item.id !== work.id)
    );

    alert("Work deleted successfully!");
  } catch (error) {
    console.error("Delete failed:", error);
    alert("Failed to delete the work. Check the console.");
  }
};

return (
  <section className="manage-works-page">
    <div className="manage-works-container">

  

  <div className="manage-works-header">
        <Link
  to="/admin/dashboard"
  className="admin-back-btn"
>
  Back to Dashboard
</Link>
        <p>ADMIN PANEL</p>

        <h1>Manage Works</h1>

        <p>
          Manage your completed projects displayed on the website.
        </p>
      </div>

      {loading ? (
        <div className="no-works">
          <h2>Loading Works...</h2>

          <p>
            Please wait while we load your completed projects.
          </p>
        </div>
      ) : works.length === 0 ? (
        <div className="no-works">
          <h2>No Works Published Yet</h2>

          <p>
            Add your first completed work to display it on the website.
          </p>

          <Link
            to="/admin/add-work"
            className="edit-btn"
          >
            Add New Work
          </Link>
        </div>
      ) : (
        <div className="works-grid">

          {works.map((work) => {

            const createdDate = work.createdAt?.toDate
              ? work.createdAt.toDate().toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "Date unavailable";

            return (
              <div
                className="work-card"
                key={work.id}
              >

                {/* Thumbnail */}
                <div className="work-card-image">
                  {work.thumbnailUrl || work.afterImages?.[0] ? (
                    <img
                      src={work.thumbnailUrl || work.afterImages?.[0]}
                      alt={work.title}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                </div>

                {/* Work Details */}
                <div className="work-card-content">

                  <h2>{work.title}</h2>

                  <div className="work-info">

                    <p>
                      <strong>Service:</strong>{" "}
                      {work.service}
                    </p>

                    <p>
                      <strong>Location:</strong>{" "}
                      {work.location}
                    </p>

                    <p>
                      <strong>Created:</strong>{" "}
                      {createdDate}
                    </p>

                  </div>

                  {/* Actions */}
                  <div className="work-card-actions">

                   <Link
  to={`/admin/edit-work/${work.id}`}
  className="edit-btn"
>
  Edit
</Link>

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(work)}
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  </section>
);
}

export default ManageWorks;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./WorkDetails.css";

function WorkDetails() {
  const { id } = useParams();

  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const workRef = doc(db, "works", id);
        const workSnapshot = await getDoc(workRef);

        if (workSnapshot.exists()) {
          setWork({
            id: workSnapshot.id,
            ...workSnapshot.data(),
          });
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching work:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWork();
  }, [id]);

  if (loading) {
    return (
      <section className="work-details">
        <div className="work-details-container">
          <div className="work-details-status">
            Loading project...
          </div>
        </div>
      </section>
    );
  }

  if (error || !work) {
    return (
      <section className="work-details">
        <div className="work-details-container">
          <div className="work-details-status">
            <h2>Project Not Found</h2>

            <p>
              The project you are looking for is not available.
            </p>

            <Link
              to="/works"
              className="work-details-back-btn"
            >
              Back to Our Works
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="work-details">
      <div className="work-details-container">

        {/* Back */}
        <Link
          to="/works"
          className="work-details-back"
        >
          Back to Our Works
        </Link>

        <div className="work-details-layout">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="work-details-info">

            <p className="work-details-label">
              COMPLETED PROJECT
            </p>

            <p className="work-details-service">
              {work.service}
            </p>

            <h1>{work.title}</h1>

            <span className="work-details-location">
              📍 {work.location}
            </span>

            <div className="work-details-description">
              <h2>Project Details</h2>

              <p>{work.description}</p>
            </div>

          </div>


          {/* =========================
              RIGHT PHOTOS
          ========================= */}

          <div className="work-details-gallery-column">

            {/* BEFORE */}
            {work.beforeImages?.length > 0 && (
              <div className="work-details-section">

                <h2>Before</h2>

                <div className="work-details-gallery">
                  {work.beforeImages.map((image, index) => (
                    <div
                      className="work-details-image"
                      key={index}
                    >
                      <img
                        src={image}
                        alt={`${work.title} before work ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

              </div>
            )}


            {/* AFTER */}
            {work.afterImages?.length > 0 && (
              <div className="work-details-section">

                <h2>After</h2>

                <div className="work-details-gallery">
                  {work.afterImages.map((image, index) => (
                    <div
                      className="work-details-image"
                      key={index}
                    >
                      <img
                        src={image}
                        alt={`${work.title} after work ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WorkDetails;
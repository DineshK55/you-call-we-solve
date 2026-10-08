import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import "./WorksSection.css";
import ScrollReveal from "./ScrollReveal/ScrollReveal";

function WorksSection() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const worksQuery = query(
          collection(db, "works"),
          where("published", "==", true)
        );

        const snapshot = await getDocs(worksQuery);

        const worksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setWorks(worksData.slice(0, 4));
      } catch (error) {
        console.error("Error fetching works:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  return (
    <section className="works-section">
      <div className="works-container">

        {/* SECTION HEADING */}
        <ScrollReveal>
          <div className="works-heading">
            <p>OUR WORK</p>

            <h2>Our Recent Work</h2>

            <span>
              Electrical, plumbing, breaker machine & core cutting work we
              have completed for different requirements.
            </span>
          </div>
        </ScrollReveal>


        {/* WORKS */}
        {loading ? (
          <p>Loading works...</p>
        ) : (
          <div className="works-grid">

            {works.map((work, index) => (
              <ScrollReveal
                key={work.id}
                delay={index * 120}
              >
                <div
                  className="work-card"
                  style={{ "--card-index": index }}
                >

                  <div className="work-image-placeholder">
                    <img
                      src={work.thumbnailUrl}
                      alt={work.title}
                    />
                  </div>

                  <div className="work-content">

                    <p>{work.service}</p>

                    <h3>{work.title}</h3>

                    <span>
                      📍 {work.location}
                    </span>

                    <Link
                      to={`/works/${work.id}`}
                      className="work-view-btn"
                    >
                      View Details
                    </Link>

                  </div>

                </div>
              </ScrollReveal>
            ))}

          </div>
        )}


        {/* VIEW ALL */}
        <ScrollReveal delay={200}>
          <div className="works-view-all">
            <Link
              to="/works"
              className="works-view-all-btn"
            >
              View All Works
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default WorksSection;
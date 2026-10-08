import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import SEO from "../components/SEO/SEO";
import "./Works.css";


function Works() {
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

        setWorks(worksData);
      } catch (error) {
        console.error("Error fetching works:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  return (
  <>
    <SEO
      title="Our Works | You Call We Solve"
      description="View completed electrical, plumbing, breaker machine and core cutting work by You Call We Solve in Anthiyur and surrounding areas."
    />

    <section className="works-page">
      <div className="works-page-container">

        <div className="works-page-heading">
          <p>OUR WORK</p>

          <h1>Completed Works</h1>

          <span>
            Explore some of the projects we have completed for our clients.
          </span>
        </div>

        {loading ? (
          <div className="works-page-status">
            <p>Loading works...</p>
          </div>
        ) : works.length === 0 ? (
          <div className="works-page-status">
            <p>No completed works available.</p>
          </div>
        ) : (
          <div className="works-page-grid">
            {works.map((work) => (
              <div className="works-page-card" key={work.id}>

                <div className="works-page-image">
                  <img
                    src={work.thumbnailUrl}
                    alt={work.title}
                  />
                </div>

                <div className="works-page-content">

                  <p>{work.service}</p>

                  <h2>{work.title}</h2>

                  <span>📍 {work.location}</span>

                  <Link
                    to={`/works/${work.id}`}
                    className="works-page-btn"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
       </section>
  </>
  );
}
export default Works;
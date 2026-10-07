import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import "./WorkDetails.css";

function WorkDetails() {
  const { id } = useParams();

  /* =========================
     PROJECT STATE
  ========================= */

  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  /* =========================
     GALLERY STATE
  ========================= */

  const [selectedType, setSelectedType] = useState("before");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);


  /* =========================
     LIGHTBOX STATE
  ========================= */

  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);


  /* =========================
     FETCH PROJECT
  ========================= */

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


  /* =========================
     IMAGE ARRAYS
  ========================= */

  const beforeImages = work?.beforeImages || [];
  const afterImages = work?.afterImages || [];


  /* =========================
     ALL PHOTOS
  ========================= */

  const allPhotos = useMemo(() => {
    return [
      ...beforeImages.map((image, index) => ({
        image,
        type: "Before",
        index,
      })),

      ...afterImages.map((image, index) => ({
        image,
        type: "After",
        index,
      })),
    ];
  }, [beforeImages, afterImages]);


  /* =========================
     SELECTED IMAGE GROUP
  ========================= */

  const selectedImages =
    selectedType === "before"
      ? beforeImages
      : afterImages;


  const currentImage =
    selectedImages[selectedImageIndex];


  /* =========================
     BEFORE / AFTER CHANGE
  ========================= */

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedImageIndex(0);
  };


  /* =========================
     PREVIOUS IMAGE
  ========================= */

  const handlePreviousImage = () => {
    if (selectedImages.length <= 1) {
      return;
    }

    setSelectedImageIndex((current) =>
      current === 0
        ? selectedImages.length - 1
        : current - 1
    );
  };


  /* =========================
     NEXT IMAGE
  ========================= */

  const handleNextImage = () => {
    if (selectedImages.length <= 1) {
      return;
    }

    setSelectedImageIndex((current) =>
      current === selectedImages.length - 1
        ? 0
        : current + 1
    );
  };


  /* =========================
     OPEN ALL PHOTOS
  ========================= */

  const openAllPhotos = () => {
    if (allPhotos.length === 0) {
      return;
    }

    setLightboxIndex(0);
    setShowAllPhotos(true);

    document.body.style.overflow = "hidden";
  };


  /* =========================
     CLOSE ALL PHOTOS
  ========================= */

  const closeAllPhotos = () => {
    setShowAllPhotos(false);

    document.body.style.overflow = "";
  };


  /* =========================
     LIGHTBOX PREVIOUS
  ========================= */

  const goLightboxPrevious = () => {
    if (allPhotos.length === 0) {
      return;
    }

    setLightboxIndex((current) =>
      current === 0
        ? allPhotos.length - 1
        : current - 1
    );
  };


  /* =========================
     LIGHTBOX NEXT
  ========================= */

  const goLightboxNext = () => {
    if (allPhotos.length === 0) {
      return;
    }

    setLightboxIndex((current) =>
      current === allPhotos.length - 1
        ? 0
        : current + 1
    );
  };


  /* =========================
     CLEANUP BODY SCROLL
  ========================= */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);


  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <section className="work-details">
        <div className="work-details-container">

          <div className="work-details-status">
            <span className="work-details-loading-dot"></span>

            <p>Loading project...</p>
          </div>

        </div>
      </section>
    );
  }


  /* =========================
     ERROR
  ========================= */

  if (error || !work) {
    return (
      <section className="work-details">
        <div className="work-details-container">

          <div className="work-details-status">

            <h2>
              Project Not Found
            </h2>

            <p>
              The project you are looking for
              is not available.
            </p>

            <Link
              to="/works"
              className="work-details-back-btn"
            >
              <FaArrowLeft />
              Back to Our Works
            </Link>

          </div>

        </div>
      </section>
    );
  }


  /* =========================
     MAIN PAGE
  ========================= */

  return (
    <>
      <section className="work-details">

        <div className="work-details-container">


          {/* =========================
              BACK BUTTON
          ========================= */}

          <Link
            to="/works"
            className="work-details-back"
          >
            <FaArrowLeft />

            <span>
              Back to Our Works
            </span>
          </Link>


          {/* =========================
              MAIN PROJECT AREA
          ========================= */}

          <div className="work-details-layout">


            {/* =========================
                PROJECT INFORMATION
            ========================= */}

            <div className="work-details-info">

              <p className="work-details-label">
                COMPLETED PROJECT
              </p>

              <p className="work-details-service">
                {work.service}
              </p>

              <h1>
                {work.title}
              </h1>


              {/* LOCATION */}

              <div className="work-details-location">

                <FaMapMarkerAlt />

                <span>
                  {work.location}
                </span>

              </div>


              {/* PROJECT DETAILS */}

              <div className="work-details-description">

                <h2>
                  Project Details
                </h2>

                <p>
                  {work.description}
                </p>

              </div>

            </div>


            {/* =========================
                GALLERY
            ========================= */}

            <div className="work-details-gallery-column">


              {/* =========================
                  BEFORE / AFTER SELECTOR
              ========================= */}

              <div className="before-after-selector">

                <button
                  type="button"
                  className={
                    selectedType === "before"
                      ? "before-after-select active"
                      : "before-after-select"
                  }
                  onClick={() =>
                    handleTypeChange("before")
                  }
                  disabled={
                    beforeImages.length === 0
                  }
                >
                  Before
                </button>


                <button
                  type="button"
                  className={
                    selectedType === "after"
                      ? "before-after-select active"
                      : "before-after-select"
                  }
                  onClick={() =>
                    handleTypeChange("after")
                  }
                  disabled={
                    afterImages.length === 0
                  }
                >
                  After
                </button>

              </div>


              {/* =========================
                  MAIN IMAGE
              ========================= */}

              <div className="single-gallery">

                {currentImage ? (

                  <div
                    className="single-gallery-image"
                    key={`${selectedType}-${selectedImageIndex}`}
                  >

                    <img
                      src={currentImage}
                      alt={`${work.title} ${selectedType} image ${
                        selectedImageIndex + 1
                      }`}
                    />


                    {/* IMAGE LABEL */}

                    <span className="single-gallery-label">

                      {selectedType === "before"
                        ? "Before"
                        : "After"}

                    </span>


                    {/* PREVIOUS */}

                    {selectedImages.length > 1 && (
                      <button
                        type="button"
                        className="single-gallery-arrow single-gallery-arrow-left"
                        onClick={handlePreviousImage}
                        aria-label="Previous image"
                      >
                        <FaChevronLeft />
                      </button>
                    )}


                    {/* NEXT */}

                    {selectedImages.length > 1 && (
                      <button
                        type="button"
                        className="single-gallery-arrow single-gallery-arrow-right"
                        onClick={handleNextImage}
                        aria-label="Next image"
                      >
                        <FaChevronRight />
                      </button>
                    )}

                  </div>

                ) : (

                  <div className="single-gallery-empty">

                    No{" "}
                    {selectedType === "before"
                      ? "Before"
                      : "After"}{" "}
                    Images Available

                  </div>

                )}


                {/* =========================
                    IMAGE COUNTER
                ========================= */}

                {selectedImages.length > 0 && (

                  <div className="single-gallery-counter">

                    <span>
                      {selectedType === "before"
                        ? "Before"
                        : "After"}
                    </span>

                    <strong>
                      {selectedImageIndex + 1}
                      {" / "}
                      {selectedImages.length}
                    </strong>

                  </div>

                )}


                {/* =========================
                    THUMBNAILS
                ========================= */}

                {selectedImages.length > 0 && (

                  <div className="gallery-thumbnails">

                    {selectedImages.map(
                      (image, index) => (

                        <button
                          type="button"
                          key={`${selectedType}-${index}`}
                          className={
                            selectedImageIndex === index
                              ? "gallery-thumbnail active"
                              : "gallery-thumbnail"
                          }
                          onClick={() =>
                            setSelectedImageIndex(index)
                          }
                          aria-label={`View ${
                            selectedType
                          } image ${index + 1}`}
                        >

                          <img
                            src={image}
                            alt={`${selectedType} thumbnail ${
                              index + 1
                            }`}
                          />

                        </button>

                      )
                    )}

                  </div>

                )}


                {/* =========================
                    VIEW ALL PHOTOS
                ========================= */}

                <div className="gallery-all-photos">


                  <div className="gallery-all-photos-info">

                    <div className="gallery-all-photos-icon">

                      <FaImages />

                    </div>


                    <div>

                      <strong>
                        {allPhotos.length} Photos
                      </strong>

                      <span>
                        View all before and after images
                      </span>

                    </div>

                  </div>


                  <button
                    type="button"
                    className="gallery-view-all"
                    onClick={openAllPhotos}
                  >
                    View All Photos

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              WORK DESCRIPTION
          ========================= */}

          <div className="work-description-section">

            <h2>
              Work Description
            </h2>

            <p>
              {work.description}
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          FULL PHOTO VIEWER
      ================================================= */}

      {showAllPhotos &&
        allPhotos.length > 0 && (

          <div className="photo-lightbox">


            {/* =========================
                LIGHTBOX HEADER
            ========================= */}

            <div className="photo-lightbox-header">

              <div>

                <strong>
                  Project Photos
                </strong>

                <span>
                  {lightboxIndex + 1}
                  {" / "}
                  {allPhotos.length}
                </span>

              </div>


              <button
                type="button"
                className="photo-lightbox-close"
                onClick={closeAllPhotos}
                aria-label="Close photos"
              >
                <FaTimes />
              </button>

            </div>


            {/* =========================
                MAIN LIGHTBOX PHOTO
            ========================= */}

            <div className="photo-lightbox-content">


              {/* PREVIOUS */}

              <button
                type="button"
                className="photo-lightbox-arrow left"
                onClick={goLightboxPrevious}
                aria-label="Previous photo"
              >
                <FaChevronLeft />
              </button>


              {/* IMAGE */}

              <div className="photo-lightbox-image">

                <img
                  key={lightboxIndex}
                  src={allPhotos[lightboxIndex].image}
                  alt={`${work.title} ${
                    allPhotos[lightboxIndex].type
                  }`}
                />

                <span>
                  {allPhotos[lightboxIndex].type}
                </span>

              </div>


              {/* NEXT */}

              <button
                type="button"
                className="photo-lightbox-arrow right"
                onClick={goLightboxNext}
                aria-label="Next photo"
              >
                <FaChevronRight />
              </button>

            </div>


            {/* =========================
                LIGHTBOX THUMBNAILS
            ========================= */}

            <div className="photo-lightbox-thumbnails">

              {allPhotos.map((photo, index) => (

                <button
                  type="button"
                  key={`${photo.image}-${index}`}
                  className={
                    lightboxIndex === index
                      ? "lightbox-thumbnail active"
                      : "lightbox-thumbnail"
                  }
                  onClick={() =>
                    setLightboxIndex(index)
                  }
                  aria-label={`View ${
                    photo.type
                  } photo ${photo.index + 1}`}
                >

                  <img
                    src={photo.image}
                    alt={`${photo.type} ${
                      photo.index + 1
                    }`}
                  />

                </button>

              ))}

            </div>

          </div>

        )}

    </>
  );
}

export default WorkDetails;
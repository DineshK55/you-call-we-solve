import { useState, useRef } from "react";
import imageCompression from "browser-image-compression";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import "./AddWork.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
function AddWork() {

  const formRef = useRef(null); 

  const [title, setTitle] = useState("");
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [beforeImages, setBeforeImages] = useState([]);
  const [afterImages, setAfterImages] = useState([]);

 const [isPublishing, setIsPublishing] = useState(false);

  


 

  // --------------------------------
  // Format file size
  // --------------------------------
  const formatFileSize = (bytes) => {
    if (!Number.isFinite(bytes)) {
      return "0 KB";
    }

    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  // --------------------------------
  // Compress image
  // --------------------------------
  const compressImage = async (file) => {
    const options = {
  maxSizeMB: 0.5,
  maxWidthOrHeight: 1600,
  useWebWorker: true,
};

    const compressedFile = await imageCompression(file, options);

    const compressedSize = compressedFile.size;
    const originalSize = file.size;

    const reduction =
      originalSize > 0
        ? (
            ((originalSize - compressedSize) / originalSize) *
            100
          ).toFixed(1)
        : "0.0";

    return {
      compressedFile,
      compressedSize,
      reduction,
    };
  };

  const createThumbnail = async (file) => {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 600,
    useWebWorker: true,
  };

  return await imageCompression(file, options);
};

  // --------------------------------
  // Handle image selection
  // --------------------------------
  const handleImageSelect = async (event, type) => {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) {
      return;
    }

    // Create preview objects immediately
    const newImages = files.map((file, index) => ({
      id: `${file.name}-${file.lastModified}-${Date.now()}-${index}`,

      originalFile: file,

      compressedFile: null,

      // Original image preview loads immediately
      preview: URL.createObjectURL(file),

      originalSize: file.size,

      compressedSize: null,

      reduction: null,

      compressing: true,
    }));

    // Add images without replacing previous images
    if (type === "before") {
      setBeforeImages((previousImages) => [
        ...previousImages,
        ...newImages,
      ]);
    }

    if (type === "after") {
      setAfterImages((previousImages) => [
        ...previousImages,
        ...newImages,
      ]);
    }

    // Allow selecting the same file again
    event.target.value = "";

    // Compress images one by one
    // Compress images in parallel

await Promise.all(
  newImages.map(async (image) => {
    try {
      const result = await compressImage(
        image.originalFile
      );

      if (type === "before") {
        setBeforeImages((previousImages) =>
          previousImages.map((item) => {
            if (item.id !== image.id) {
              return item;
            }

            return {
              ...item,
              compressedFile: result.compressedFile,
              compressedSize: result.compressedSize,
              reduction: result.reduction,
              compressing: false,
            };
          })
        );
      }

      if (type === "after") {
        setAfterImages((previousImages) =>
          previousImages.map((item) => {
            if (item.id !== image.id) {
              return item;
            }

            return {
              ...item,
              compressedFile: result.compressedFile,
              compressedSize: result.compressedSize,
              reduction: result.reduction,
              compressing: false,
            };
          })
        );
      }
    } catch (error) {
      console.error(
        "Image compression failed:",
        error
      );

      if (type === "before") {
        setBeforeImages((previousImages) =>
          previousImages.map((item) => {
            if (item.id !== image.id) {
              return item;
            }

            return {
              ...item,
              compressing: false,
            };
          })
        );
      }

      if (type === "after") {
        setAfterImages((previousImages) =>
          previousImages.map((item) => {
            if (item.id !== image.id) {
              return item;
            }

            return {
              ...item,
              compressing: false,
            };
          })
        );
      }
    }
  })
);
};

  // --------------------------------
  // Remove Before image
  // --------------------------------
  const removeBeforeImage = (id) => {
    setBeforeImages((previousImages) => {
      const imageToRemove = previousImages.find(
        (image) => image.id === id
      );

      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }

      return previousImages.filter(
        (image) => image.id !== id
      );
    });
  };

  // --------------------------------
  // Remove After image
  // --------------------------------
  const removeAfterImage = (id) => {
    setAfterImages((previousImages) => {
      const imageToRemove = previousImages.find(
        (image) => image.id === id
      );

      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }

      return previousImages.filter(
        (image) => image.id !== id
      );
    });
  };

 const uploadImages = async (images, folder) => {
  const uploadedUrls = await Promise.all(
    images.map(async (image, index) => {
      if (!image.compressedFile) {
        throw new Error(
          `Image ${index + 1} in ${folder} is not compressed yet.`
        );
      }

      const fileName = `${Date.now()}-${index}-${image.originalFile.name}`;

      const storagePath = `works/${folder}/${fileName}`;

      const storageRef = ref(storage, storagePath);

      await uploadBytes(storageRef, image.compressedFile);

      return await getDownloadURL(storageRef);
    })
  );

  return uploadedUrls;
};

  // --------------------------------
  // Submit form
  // --------------------------------
 const handleSubmit = async (event) => {
  event.preventDefault();

  console.log("Firebase current user:", getAuth().currentUser);

  if (!title.trim()) {
    alert("Please enter the work title.");
    return;
  }

  if (!service) {
    alert("Please select a service.");
    return;
  }

  if (!location.trim()) {
    alert("Please enter the location.");
    return;
  }

  if (!description.trim()) {
    alert("Please enter the description.");
    return;
  }

  if (beforeImages.length === 0) {
    alert("Please select at least one Before image.");
    return;
  }

  if (afterImages.length === 0) {
    alert("Please select at least one After image.");
    return;
  }

  const allImagesCompressed = [...beforeImages, ...afterImages].every(
    (image) => image.compressedFile
  );

  if (!allImagesCompressed) {
    alert("Please wait until all images are compressed.");
    return;
  }

  if (isPublishing) {
  return;
}

setIsPublishing(true);

const publishStartTime = performance.now();

try {
  // Upload Before images
  // Upload Before and After images in parallel
const uploadStartTime = performance.now();

const [beforeUrls, afterUrls] = await Promise.all([
  uploadImages(beforeImages, "before"),
  uploadImages(afterImages, "after"),
]);

const uploadTime = (
  (performance.now() - uploadStartTime) /
  1000
).toFixed(2);

console.log(`📤 IMAGE UPLOADS: ${uploadTime} seconds`);

  // Create small thumbnail from the first After image
const thumbnailUrl = afterUrls[0];



  // Save work details + image URLs in Firestore
const workData = {
  title,
  service,
  location,
  description,
  beforeImages: beforeUrls,
  afterImages: afterUrls,
  thumbnailUrl,
  createdAt: serverTimestamp(),
  published: true,
};

const firestoreStartTime = performance.now();

await addDoc(
  collection(db, "works"),
  workData
);

const firestoreTime = (
  (performance.now() - firestoreStartTime) /
  1000
).toFixed(2);

console.log(`🔥 FIRESTORE SAVE: ${firestoreTime} seconds`);

  console.log("Work saved successfully:", workData);

  const publishEndTime = performance.now();

const publishTime = (
  (publishEndTime - publishStartTime) /
  1000
).toFixed(2);

console.log(`🚀 PUBLISH COMPLETE: ${publishTime} seconds`);

  alert("Work published successfully!");

  // Clear form
  setTitle("");
  setService("");
  setLocation("");
  setDescription("");
  setBeforeImages([]);
  setAfterImages([]);

  formRef.current?.reset();

} catch (error) {
  console.error("Work upload failed:", error);

  alert(
    "Work upload failed. Check the console."
  );
} finally {
  setIsPublishing(false);
}
};

  return (
    <section className="add-work-page">
      <div className="add-work-container">

        <Link
  to="/admin/dashboard"
  className="add-work-back-btn"
>
  Back to Dashboard
</Link>

        {/* Heading */}
        <div className="add-work-heading">

          
          <p>ADMIN PANEL</p>

          <h1>Add New Work</h1>

          <span>
            Add a completed project to display on the website.
          </span>
        </div>

        {/* Form */}
        <form
  ref={formRef}
  className="add-work-form"
  onSubmit={handleSubmit}
>

          {/* Work Title */}
          <div className="add-work-group">
            <label htmlFor="title">
              Work Title
            </label>

            <input
              type="text"
              id="title"
              placeholder="Example: Electrical Installation"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
            />
          </div>

          {/* Service */}
          <div className="add-work-group">
            <label htmlFor="service">
              Service
            </label>

            <select
              id="service"
              value={service}
              onChange={(event) =>
                setService(event.target.value)
              }
            >
              <option value="">
                Select Service
              </option>

              <option value="Electrical Work">
                Electrical Work
              </option>

              <option value="Plumbing Work">
                Plumbing Work
              </option>

              <option value="Breaker Machine Work">
                Breaker Machine Work
              </option>

              <option value="Core Cutting Work">
                Core Cutting Work
              </option>
            </select>
          </div>

          {/* Location */}
          <div className="add-work-group">
            <label htmlFor="location">
              Location
            </label>

            <input
              type="text"
              id="location"
              placeholder="Example: Erode"
              value={location}
              onChange={(event) =>
                setLocation(event.target.value)
              }
            />
          </div>

          {/* Description */}
          <div className="add-work-group">
            <label htmlFor="description">
              Description
            </label>

            <textarea
              id="description"
              rows="6"
              placeholder="Describe the completed work..."
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
            />
          </div>

          {/* ================================= */}
          {/* BEFORE IMAGES */}
          {/* ================================= */}

          <div className="add-work-group">
            <label htmlFor="beforeImages">
              Before Images
            </label>

            <input
              type="file"
              id="beforeImages"
              accept="image/*"
              multiple
              onChange={(event) =>
                handleImageSelect(
                  event,
                  "before"
                )
              }
            />

            {beforeImages.length > 0 && (
              <div className="image-preview-grid">

                {beforeImages.map((image, index) => (
                  <div
                    className="image-preview-card"
                    key={image.id}
                  >

                    {/* Image Preview */}
                    <div className="image-preview-wrapper">

                      <img
                        src={image.preview}
                        alt={`Before ${index + 1}`}
                      />

                      {/* X Button */}
                      <button
                        type="button"
                        className="image-cancel-btn"
                        onClick={() =>
                          removeBeforeImage(
                            image.id
                          )
                        }
                        aria-label="Remove image"
                      >
                        ×
                      </button>

                      {/* Compression Status */}
                      {image.compressing && (
                        <div className="image-compressing">
                          Compressing...
                        </div>
                      )}

                    </div>

                    {/* Image Information */}
                    <div className="image-preview-info">

                      <p>
                        <strong>
                          Original:
                        </strong>{" "}
                        {formatFileSize(
                          image.originalSize
                        )}
                      </p>

                      <p>
                        <strong>
                          Compressed:
                        </strong>{" "}
                        {image.compressedSize !== null
                          ? formatFileSize(
                              image.compressedSize
                            )
                          : "Compressing..."}
                      </p>

                      <p>
                        <strong>
                          Saved:
                        </strong>{" "}
                        {image.reduction !== null
                          ? `${image.reduction}%`
                          : "Calculating..."}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            )}
          </div>

          {/* ================================= */}
          {/* AFTER IMAGES */}
          {/* ================================= */}

          <div className="add-work-group">
            <label htmlFor="afterImages">
              After Images
            </label>

            <input
              type="file"
              id="afterImages"
              accept="image/*"
              multiple
              onChange={(event) =>
                handleImageSelect(
                  event,
                  "after"
                )
              }
            />

            {afterImages.length > 0 && (
              <div className="image-preview-grid">

                {afterImages.map((image, index) => (
                  <div
                    className="image-preview-card"
                    key={image.id}
                  >

                    {/* Image Preview */}
                    <div className="image-preview-wrapper">

                      <img
                        src={image.preview}
                        alt={`After ${index + 1}`}
                      />

                      {/* X Button */}
                      <button
                        type="button"
                        className="image-cancel-btn"
                        onClick={() =>
                          removeAfterImage(
                            image.id
                          )
                        }
                        aria-label="Remove image"
                      >
                        ×
                      </button>

                      {/* Compression Status */}
                      {image.compressing && (
                        <div className="image-compressing">
                          Compressing...
                        </div>
                      )}

                    </div>

                    {/* Image Information */}
                    <div className="image-preview-info">

                      <p>
                        <strong>
                          Original:
                        </strong>{" "}
                        {formatFileSize(
                          image.originalSize
                        )}
                      </p>

                      <p>
                        <strong>
                          Compressed:
                        </strong>{" "}
                        {image.compressedSize !== null
                          ? formatFileSize(
                              image.compressedSize
                            )
                          : "Compressing..."}
                      </p>

                      <p>
                        <strong>
                          Saved:
                        </strong>{" "}
                        {image.reduction !== null
                          ? `${image.reduction}%`
                          : "Calculating..."}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            )}
          </div>

         
          {/* Publish */}
          <button
  type="submit"
  className="add-work-btn"
  disabled={isPublishing}
>
  {isPublishing ? "Publishing..." : "Publish Work"}
</button>

        </form>
      </div>
    </section>
  );
}

export default AddWork;
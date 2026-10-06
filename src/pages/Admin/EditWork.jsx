import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import imageCompression from "browser-image-compression";

import { db, storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import { Link } from "react-router-dom";

import "./EditWork.css";

function EditWork() {
  const { id } = useParams();
  const navigate = useNavigate();

  const beforeInputRef = useRef(null);
  const afterInputRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [beforeImages, setBeforeImages] = useState([]);
  const [afterImages, setAfterImages] = useState([]);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const [newBeforeImages, setNewBeforeImages] = useState([]);
  const [newAfterImages, setNewAfterImages] = useState([]);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const workRef = doc(db, "works", id);
        const workSnapshot = await getDoc(workRef);

        if (!workSnapshot.exists()) {
          console.error("Work not found.");
          setLoading(false);
          return;
        }

        const data = workSnapshot.data();

        setTitle(data.title || "");
        setService(data.service || "");
        setLocation(data.location || "");
        setDescription(data.description || "");

        setBeforeImages(data.beforeImages || []);
        setAfterImages(data.afterImages || []);
        setThumbnailUrl(data.thumbnailUrl || "");  
      } catch (error) {
        console.error("Failed to fetch work:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWork();
  }, [id]);

const compressImage = async (file) => {
  const options = {
  maxSizeMB: 0.35,
  maxWidthOrHeight: 1400,
  initialQuality: 0.65,
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


  const formatFileSize = (bytes) => {
  if (!bytes) {
    return "0 KB";
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(0)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

  const handleBeforeImages = async (event) => {
  const files = Array.from(event.target.files || []);

  if (files.length === 0) {
    return;
  }

  const newImages = files.map((file, index) => ({
    id: `${file.name}-${file.lastModified}-${Date.now()}-${index}`,
    originalFile: file,
    compressedFile: null,
    thumbnailFile: null,
    preview: URL.createObjectURL(file),

    originalSize: file.size,
    compressedSize: null,
    reduction: null,

    compressing: true,
    compressionError: false,
  }));

  // Show images immediately
  setNewBeforeImages((currentImages) => [
    ...currentImages,
    ...newImages,
  ]);

  // Allow selecting same file again
  event.target.value = "";

  // Compress one by one
  // Compress all new Before images in parallel

// Let React show the image and "Compressing..." first
await new Promise((resolve) => requestAnimationFrame(resolve));

// Compress all new Before images in parallel
await Promise.all(
  newImages.map(async (image) => {
    try {
      const result = await compressImage(
        image.originalFile
      );

      setNewBeforeImages((currentImages) =>
        currentImages.map((item) => {
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
    } catch (error) {
      console.error(
        "Failed to compress Before image:",
        error
      );

      setNewBeforeImages((currentImages) =>
        currentImages.map((item) => {
          if (item.id !== image.id) {
            return item;
          }

          return {
            ...item,
            compressing: false,
            compressionError: true,
          };
        })
      );
    }
  })
);
}; 
const handleAfterImages = async (event) => {
  const files = Array.from(event.target.files || []);

  if (files.length === 0) {
    return;
  }

  const newImages = files.map((file, index) => ({
    id: `${file.name}-${file.lastModified}-${Date.now()}-${index}`,
    originalFile: file,
    compressedFile: null,
    preview: URL.createObjectURL(file),
    originalSize: file.size,
    compressedSize: null,
    reduction: null,
    compressing: true,
    compressionError: false,
  }));

  setNewAfterImages((currentImages) => [
    ...currentImages,
    ...newImages,
  ]);

  event.target.value = "";

  // Compress all new After images in parallel
// Let React show the image and "Compressing..." first
await new Promise((resolve) => requestAnimationFrame(resolve));

// Compress all new After images in parallel
await Promise.all(
  newImages.map(async (image) => {
    try {
      const result = await compressImage(
  image.originalFile
);

      setNewAfterImages((currentImages) =>
        currentImages.map((item) => {
          if (item.id !== image.id) {
            return item;
          }

          return {
            ...item,
            compressedFile: result.compressedFile,
            compressedSize: result.compressedSize,
            reduction: result.reduction,
            compressing: false,
            compressionError: false,
          };
        })
      );
    } catch (error) {
      console.error(
        "Failed to compress After image:",
        error
      );

      setNewAfterImages((currentImages) =>
        currentImages.map((item) => {
          if (item.id !== image.id) {
            return item;
          }

          return {
            ...item,
            compressing: false,
            compressionError: true,
          };
        })
      );
    }
  })
);}

const removeExistingBeforeImage = (index) => {
  setBeforeImages((currentImages) =>
    currentImages.filter((_, imageIndex) => imageIndex !== index)
  );
};

const removeExistingAfterImage = (index) => {
  setAfterImages((currentImages) =>
    currentImages.filter((_, imageIndex) => imageIndex !== index)
  );
};

const removeNewBeforeImage = (id) => {
  setNewBeforeImages((currentImages) => {
    const imageToRemove = currentImages.find(
      (image) => image.id === id
    );

    if (imageToRemove?.preview) {
      URL.revokeObjectURL(imageToRemove.preview);
    }

    return currentImages.filter(
      (image) => image.id !== id
    );
  });
};

const removeNewAfterImage = (id) => {
  setNewAfterImages((currentImages) => {
    const imageToRemove = currentImages.find(
      (image) => image.id === id
    );

    if (imageToRemove?.preview) {
      URL.revokeObjectURL(imageToRemove.preview);
    }

    return currentImages.filter(
      (image) => image.id !== id
    );
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();

  setSaving(true);

  try {
    const workRef = doc(db, "works", id);

console.time("SAVE TOTAL");

// Get the original work data
console.time("GET WORK");
const workSnapshot = await getDoc(workRef);
console.timeEnd("GET WORK");
    if (!workSnapshot.exists()) {
      alert("Work not found.");
      return;
    }

    const originalData = workSnapshot.data();

    const originalBeforeImages = originalData.beforeImages || [];
    const originalAfterImages = originalData.afterImages || [];

    // Make sure all new images are completely compressed
    const allNewImages = [
      ...newBeforeImages,
      ...newAfterImages,
    ];

    const hasCompressionInProgress = allNewImages.some(
      (image) => image.compressing
    );

    if (hasCompressionInProgress) {
      alert("Please wait until all images finish compressing.");
      return;
    }

    const hasCompressionError = allNewImages.some(
      (image) => image.compressionError
    );

    if (hasCompressionError) {
      alert("One or more images failed to compress. Please remove them and add again.");
      return;
    }

    // Check whether images were changed
const imagesChanged =
  newBeforeImages.length > 0 ||
  newAfterImages.length > 0 ||
  beforeImages.length !== originalBeforeImages.length ||
  afterImages.length !== originalAfterImages.length;

console.log("Images changed:", imagesChanged);

// Save text changes directly when images were not changed
if (!imagesChanged) {
  console.time("FIRESTORE UPDATE");
  await updateDoc(workRef, {
    title,
    service,
    location,
    description,
    beforeImages: originalBeforeImages,
    afterImages: originalAfterImages,
    thumbnailUrl,
  });
  console.timeEnd("FIRESTORE UPDATE");
console.timeEnd("SAVE TOTAL");

  alert("Work updated successfully!");
  navigate("/admin/manage-works");
  return;
}

// Upload Before and After images in parallel

console.time("UPLOAD IMAGES");

const [uploadedBeforeUrls, uploadedAfterUrls] = await Promise.all([
  Promise.all(
    newBeforeImages.map(async (image, index) => {
      const fileName = `${Date.now()}-before-${index}-${image.originalFile.name}`;

      const storageRef = ref(
        storage,
        `works/before/${fileName}`
      );

      const uploadStart = performance.now();

      await uploadBytes(
        storageRef,
        image.compressedFile
      );

      console.log(
        "UPLOAD BEFORE BYTES:",
        performance.now() - uploadStart,
        "ms"
      );

      const urlStart = performance.now();

      const downloadUrl = await getDownloadURL(storageRef);

      console.log(
        "GET BEFORE DOWNLOAD URL:",
        performance.now() - urlStart,
        "ms"
      );

      return downloadUrl;
    })
  ),

  Promise.all(
    newAfterImages.map(async (image, index) => {
      const fileName = `${Date.now()}-after-${index}-${image.originalFile.name}`;

      const storageRef = ref(
        storage,
        `works/after/${fileName}`
      );

      const uploadStart = performance.now();

      await uploadBytes(
        storageRef,
        image.compressedFile
      );

      console.log(
        "UPLOAD AFTER BYTES:",
        performance.now() - uploadStart,
        "ms"
      );

      const urlStart = performance.now();

      const downloadUrl = await getDownloadURL(storageRef);

      console.log(
        "GET AFTER DOWNLOAD URL:",
        performance.now() - urlStart,
        "ms"
      );

      return downloadUrl;
    })
  ),
]);

console.timeEnd("UPLOAD IMAGES");

const finalBeforeImages = [
  ...beforeImages,
  ...uploadedBeforeUrls,
];

const finalAfterImages = [
  ...afterImages,
  ...uploadedAfterUrls,
];

// Delete removed Before and After images in parallel

const removedBeforeImages = originalBeforeImages.filter(
  (url) => !finalBeforeImages.includes(url)
);

const removedAfterImages = originalAfterImages.filter(
  (url) => !finalAfterImages.includes(url)
);

await Promise.all([
  Promise.all(
    removedBeforeImages.map(async (imageUrl) => {
      try {
        await deleteObject(ref(storage, imageUrl));
      } catch (error) {
        console.error(
          "Failed to delete removed Before image:",
          error
        );
      }
    })
  ),

  Promise.all(
    removedAfterImages.map(async (imageUrl) => {
      try {
        await deleteObject(ref(storage, imageUrl));
      } catch (error) {
        console.error(
          "Failed to delete removed After image:",
          error
        );
      }
    })
  ),
]);

console.log("DELETE IMAGES COMPLETE");


    // Update thumbnail
   // Update thumbnail

   console.time("THUMBNAIL");
let finalThumbnailUrl = thumbnailUrl;

if (finalAfterImages.length > 0) {
  const firstAfterImage = finalAfterImages[0];

  // If the first After image is a newly uploaded image,
  // use the existing uploaded URL as the thumbnail.
  if (uploadedAfterUrls.includes(firstAfterImage)) {
    finalThumbnailUrl = firstAfterImage;

    // Delete the old thumbnail if it is different
    if (thumbnailUrl && thumbnailUrl !== finalThumbnailUrl) {
      try {
        await deleteObject(
          ref(storage, thumbnailUrl)
        );
      } catch (error) {
        console.error(
          "Failed to delete old thumbnail:",
          error
        );
      }
    }

  // If an existing After image became the first image,
  // use it directly as the thumbnail.
  } else if (
    finalAfterImages[0] !== originalAfterImages[0]
  ) {
    finalThumbnailUrl = finalAfterImages[0];

    if (
      thumbnailUrl &&
      thumbnailUrl !== finalThumbnailUrl
    ) {
      try {
        await deleteObject(
          ref(storage, thumbnailUrl)
        );
      } catch (error) {
        console.error(
          "Failed to delete old thumbnail:",
          error
        );
      }
    }
  }

} else {
  // No After images remain
  finalThumbnailUrl = "";

  if (thumbnailUrl) {
    try {
      await deleteObject(
        ref(storage, thumbnailUrl)
      );
    } catch (error) {
      console.error(
        "Failed to delete thumbnail:",
        error
      );
    }
  }
}

    // Save everything to Firestore
    await updateDoc(workRef, {
      title,
      service,
      location,
      description,
      beforeImages: finalBeforeImages,
      afterImages: finalAfterImages,
      thumbnailUrl: finalThumbnailUrl,
    });

    alert("Work updated successfully!");

    navigate("/admin/manage-works");
    } catch (error) {
    console.error("Failed to update work:", error);

    alert(
      "Failed to update work. Check the console."
    );
  } finally {
    setSaving(false);
  }
};
  return (
    <section className="edit-work-page">
      <div className="edit-work-container">

        <Link
  to="/admin/dashboard"
  className="edit-work-back-btn"
>
  Back to Dashboard
</Link>

        <div className="edit-work-heading">
          <p>ADMIN PANEL</p>

          <h1>Edit Work</h1>

          <span>
            Update your completed project details and images.
          </span>
        </div>

        <form
          className="edit-work-form"
          onSubmit={handleSubmit}
        >

          {/* BASIC DETAILS */}

          <div className="edit-work-section">
            <h2>Work Details</h2>

            <div className="edit-work-fields">

              <div className="edit-work-field">
                <label>Work Title</label>

                <input
                  type="text"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="Enter work title"
                />
              </div>

              <div className="edit-work-field">
                <label>Service</label>

                <select
                  value={service}
                  onChange={(event) =>
                    setService(event.target.value)
                  }
                >
                  <option value="">Select service</option>
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

              <div className="edit-work-field">
                <label>Location</label>

                <input
                  type="text"
                  value={location}
                  onChange={(event) =>
                    setLocation(event.target.value)
                  }
                  placeholder="Enter location"
                />
              </div>

              <div className="edit-work-field">
                <label>Description</label>

                <textarea
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="Describe the completed work"
                  rows="5"
                />
              </div>

            </div>
          </div>

          {/* BEFORE IMAGES */}

          <div className="edit-work-section">
            <div className="edit-work-section-header">
              <div>
                <h2>Before Images</h2>

                <p>
                  Remove existing images or add new ones.
                </p>
              </div>

              <button
                type="button"
                className="add-image-btn"
                onClick={() =>
                  beforeInputRef.current?.click()
                }
              >
                + Add Images
              </button>
            </div>

            <input
              ref={beforeInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleBeforeImages}
            />

            <div className="edit-image-grid">

              {beforeImages.map((image, index) => (
                <div
                  className="edit-image-card"
                  key={`existing-before-${index}`}
                >
                  <img
                    src={image}
                    alt={`Before ${index + 1}`}
                  />

                  <button
                    type="button"
                    className="remove-image-btn"
                    onClick={() =>
                      removeExistingBeforeImage(index)
                    }
                  >
                    ×
                  </button>

                  <span>Existing</span>
                </div>
              ))}

               {newBeforeImages.map((image) => (
  <div
    className="edit-image-card"
    key={image.id}
  >
    <img
      src={image.preview}
      alt="New Before"
    />

    <button
      type="button"
      className="remove-image-btn"
      onClick={() =>
        removeNewBeforeImage(image.id)
      }
    >
      ×
    </button>

    <span>New</span>

    <div className="image-compression-info">
      <p>
        <strong>Original:</strong>{" "}
        {formatFileSize(image.originalSize)}
      </p>

      {image.compressing ? (
        <>
          <p className="compressing-text">
            Compressing...
          </p>

          <p>
            <strong>Saved:</strong> Calculating...
          </p>
        </>
      ) : image.compressionError ? (
        <p className="compression-error">
          Compression failed
        </p>
      ) : (
        <>
          <p>
            <strong>Compressed:</strong>{" "}
            {formatFileSize(image.compressedSize)}
          </p>

          <p className="compression-saved">
            <strong>Saved:</strong>{" "}
            {image.reduction}%
          </p>
        </>
      )}
    </div>
  </div>
))}

              {beforeImages.length === 0 &&
                newBeforeImages.length === 0 && (
                  <div className="no-images">
                    No Before images
                  </div>
                )}

            </div>
          </div>

          {/* AFTER IMAGES */}

          <div className="edit-work-section">
            <div className="edit-work-section-header">
              <div>
                <h2>After Images</h2>

                <p>
                  Remove existing images or add new ones.
                </p>
              </div>

              <button
                type="button"
                className="add-image-btn"
                onClick={() =>
                  afterInputRef.current?.click()
                }
              >
                + Add Images
              </button>
            </div>

            <input
              ref={afterInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleAfterImages}
            />

            <div className="edit-image-grid">

              {afterImages.map((image, index) => (
                <div
                  className="edit-image-card"
                  key={`existing-after-${index}`}
                >
                  <img
                    src={image}
                    alt={`After ${index + 1}`}
                  />

                  <button
                    type="button"
                    className="remove-image-btn"
                    onClick={() =>
                      removeExistingAfterImage(index)
                    }
                  >
                    ×
                  </button>

                  <span>Existing</span>
                </div>
              ))}

                {newAfterImages.map((image) => (
  <div
    className="edit-image-card"
    key={image.id}
  >
    <img
      src={image.preview}
      alt="New After"
    />

    <button
      type="button"
      className="remove-image-btn"
      onClick={() =>
        removeNewAfterImage(image.id)
      }
    >
      ×
    </button>

    <span>New</span>

    <div className="image-compression-info">
      <p>
        <strong>Original:</strong>{" "}
        {formatFileSize(image.originalSize)}
      </p>

      {image.compressing ? (
        <>
          <p className="compressing-text">
            Compressing...
          </p>

          <p>
            <strong>Saved:</strong> Calculating...
          </p>
        </>
      ) : image.compressionError ? (
        <p className="compression-error">
          Compression failed
        </p>
      ) : (
        <>
          <p>
            <strong>Compressed:</strong>{" "}
            {formatFileSize(image.compressedSize)}
          </p>

          <p className="compression-saved">
            <strong>Saved:</strong>{" "}
            {image.reduction}%
          </p>
        </>
      )}
    </div>
  </div>
))}

              {afterImages.length === 0 &&
                newAfterImages.length === 0 && (
                  <div className="no-images">
                    No After images
                  </div>
                )}

            </div>
          </div>

          {/* ACTIONS */}

          <div className="edit-work-actions">

            <button
              type="button"
              className="cancel-edit-btn"
              onClick={() =>
                navigate("/admin/manage-works")
              }
            >
              Cancel
            </button>

 <button
  type="submit"
  className="save-edit-btn"
  disabled={saving}
>
  {saving ? "Saving..." : "Save Changes"}
</button>

          </div>

        </form>
      </div>
    </section>
  );

}

export default EditWork;
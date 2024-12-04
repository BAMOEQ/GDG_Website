import React from "react";
import "./PhotoGrid.css";

const PhotoGrid = ({ photos }) => {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div className="photo-grid-item" key={index}>
          {photo.src ? (
            <img src={photo.src} alt={photo.alt || `Event Flyer ${index + 1}`} />
          ) : (
            <div className="blank-space"></div> // Render blank space
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;

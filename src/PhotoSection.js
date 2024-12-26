import React from "react";
import "./PhotoSection.css";

const PhotoSection = () => {
  return (
    <section id="photos" className="photo-section">
      <h2 className="section-title">Photo Gallery</h2>
      <div className="photo-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="photo-box">
            <img
              src={`${process.env.PUBLIC_URL}/Photos/Photo${index + 1}.jpg`}
              alt={`Photo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;

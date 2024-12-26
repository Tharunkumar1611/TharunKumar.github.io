import React from "react";
import "./CertificationSection.css";

const CertificationSection = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="certification-box">
            <p>Certification {index + 1}</p>
            <img
              src={`/certificates/certificate${index + 1}.jpg`}
              alt={`Certificate ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;

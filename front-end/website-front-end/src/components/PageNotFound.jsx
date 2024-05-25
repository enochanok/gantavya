import React from "react";
import "./PageNotFound.css";
import ErrorLogo from "../assets/404png.png"; // Corrected image import

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <img src={ErrorLogo} alt="404 Not Found" className="not-found-image" />{" "}
      {/* Using the imported image */}
      <div className="not-found-text">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p>
          Oops! The page you are looking for might have been removed or is
          temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;

import React from "react";
import "./Courses.css";

import ScholarshipForm from "../../components/ScholarshipForm";

function Courses() {
  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Our Scholarships</h1>
          <p>Fill Few Details To get Further Updates on Mail</p>
        </div>
      </header>

      <ScholarshipForm />
    </div>
  );
}

export default Courses;

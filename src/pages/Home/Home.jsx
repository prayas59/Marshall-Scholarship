import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">Marshall Scholarship</h1>

          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/scholarships">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Our Scholarships
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;

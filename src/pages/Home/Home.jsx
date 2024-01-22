import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.jpg";
import Blog3Img from "../../utils/images/blog3-img.jpg";

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "Blog 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 2,
    img: [Blog2Img],
    title: "Blog 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Blog 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
];

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

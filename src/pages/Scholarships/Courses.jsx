import React from "react";
import "./Courses.css";
import ArtCourseImg from "../../utils/images/art-course.jpg";
import BusinessCourseImg from "../../utils/images/business-course.jpg";
import ComputerScienceCourseImg from "../../utils/images/computer-science-course.jpg";
import EducationCourseImg from "../../utils/images/education-course.jpg";
import HealthcareCourseImg from "../../utils/images/healthcare-course.jpg";
import LawCourseImg from "../../utils/images/law-course.jpg";
import MusicCourseImg from "../../utils/images/music-course.jpg";
import SportCourseImg from "../../utils/images/sport-course.jpg";
import ScholarshipForm from "../../components/ScholarshipForm";

const courses = [
  {
    id: 1,
    img: [ArtCourseImg],
    title: "Art Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 2,
    img: [BusinessCourseImg],
    title: "Business Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 3,
    img: [ComputerScienceCourseImg],
    title: "Computer Science Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 4,
    img: [EducationCourseImg],
    title: "Education Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 5,
    img: [HealthcareCourseImg],
    title: "Healthcare Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 6,
    img: [LawCourseImg],
    title: "Law Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 7,
    img: [MusicCourseImg],
    title: "Music Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
  {
    id: 8,
    img: [SportCourseImg],
    title: "Sport Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!",
  },
];

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

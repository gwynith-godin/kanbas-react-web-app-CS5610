import { Link } from "react-router-dom";
import { courses } from "../Database";
import { useParams, useLocation } from "react-router";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  // const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => {
        const isActive = pathname.includes(link); // Check if the link is active

        return (
          <Link 
            key={index}
            to={`/Kanbas/Courses/${cid}/${link}`}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

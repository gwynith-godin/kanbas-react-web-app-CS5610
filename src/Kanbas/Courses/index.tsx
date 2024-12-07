import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams,useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTableCourses from "./People/TableCourses";
import Quizzes from "./Quizzes";
import DetailsPage from "./Quizzes/DetailsPage/DetailsPage";
import QuizEditor from "./Quizzes/DetailsPage/QuizDetailsEditor";
import QuestionsEditor from "./Quizzes/DetailsPage/QuestionsPage/QuestionsEditor";
import QuestionsList from "./Quizzes/DetailsPage/QuestionsPage/QuestionsList";

export default function Courses({ courses }: { courses: any[]; }){
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

    return (
      <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}  &gt; {pathname.split("/")[4]}</h2> 
        <hr />
        <div className = "d-flex">
          <div className = "d-none d-md-block">
            <CoursesNavigation />
        </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTableCourses />} />
              <Route path="Quizzes" element={<Quizzes />} />
              <Route path="Quizzes/:qid" element={<DetailsPage />} />
              <Route path="Quizzes/:qid/edit" element={<QuizEditor />} />
              <Route path="Quizzes/:qid/edit/questions" element={<QuestionsList />} />
              <Route path="Quizzes/:qid/edit/questions/:questionId" element={<QuestionsEditor />} />
            </Routes>
          </div></div>
        </div>
  );
}
  
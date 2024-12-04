import { IoEllipsisVertical } from "react-icons/io5";
import {LessonControlButtons, LessonControlButtonsLight} from "../Modules/LessonControlButtons";
import { BsGripVertical, BsFillRocketTakeoffFill } from "react-icons/bs";
import { PiLineVertical } from "react-icons/pi";
import { FaCaretDown, FaTrash } from "react-icons/fa";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import FacultyRestricted, { FacultyAndAdminRestricted } from "../../Common/ProtectedRoutes";
import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import {
  setQuizzes,
  addQuiz,
  deleteQuiz,
  editQuiz,
  updateQuiz,
} from "./reducer";
import QuizListScreenControls from "./QuizListScreenControls";
import AdminRestricted from "../../Common/ProtectedRoutes";

export default function Quizzes() {
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer || []); // const assignments = db.assignments;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [isPublished, setIsPublished] = useState(true);

  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  }

  const fmtDate = (inputDate: string) => {
    if (!inputDate) return '';
    const d = new Date(inputDate);
    return d.toLocaleString() 
  };

  const handleAvailability = (availableDate: Date, untilDate: Date) => {
    const currentDate = new Date().toISOString();
    const availableDateFrmt = new Date(availableDate).toISOString();
    const untilDateFrmt = new Date(untilDate).toISOString();

    if (currentDate > untilDateFrmt) {
        return 'Closed';
    } else if (currentDate >= availableDateFrmt && currentDate <= untilDateFrmt) {
        return 'Available';
    } else if (currentDate < availableDateFrmt) {
        return `Not available until ${availableDate.toLocaleString()}`;
    }
  }

  const handleDetailsPage = (quiz: any) => {
    navigate(`${pathname}/${quiz._id}`);
  }

  const handleNewQuiz = () => {
    navigate(`${pathname}/new`);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div>
      <ul id="wd-modules" className="list-group rounded-1">
        <FacultyAndAdminRestricted>
      <QuizListScreenControls handleNewQuiz={handleNewQuiz}/>
        </FacultyAndAdminRestricted>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className=" p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="wd-title">
              <BsGripVertical className="me-2 fs-3" />
              <FaCaretDown className="me-2 fs-5" />
              Assignment Quizzes
            </div>
            </div>
            <ul className="wd-lessons list-group rounded-0">
        {quizzes
          .map((quiz: any) => (
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                  key={quiz._id}
                  onClick={() => handleDetailsPage(quiz)}
                >
              <div className="d-flex align-items-center">
              <BsFillRocketTakeoffFill className="ms-2 fs-3 green-icon" /> 
                <div className="d-flex align-items-center justify-content-start flex-grow-1">
                 <ul>
                   <span className="wd-assignment-name">{quiz.title}</span><br />
                   <span className="wd-assignment-bold"> {handleAvailability(quiz.availableDate, quiz.dueDate)} </span>
                   <span className="wd-assignment-regular"><PiLineVertical /></span>
                   <span className="wd-assignment-bold"> Due </span>
                   <span className="wd-assignment-regular">{fmtDate(quiz.dueDate)}</span><span>  </span>
                   <span className="wd-assignment-regular"><PiLineVertical /></span>
                   <span className="wd-assignment-regular"> {quiz.points} pts<PiLineVertical /></span>
                   <span className="wd-assignment-regular"> {quiz.numQuestions} Questions</span>
                 </ul>
               </div>
              </div>
              <div className="d-flex align-items-center">
                <FacultyAndAdminRestricted>
                <button
                id="wd-add-assignment-btn"
                className="btn btn-lg me-1 float-end"
                onClick={() => setIsPublished(!isPublished)}
                >
                {isPublished ? <LessonControlButtonsLight /> : <LessonControlButtons />}
                </button>
                </FacultyAndAdminRestricted>
              </div>
            </li>
          ))}
      </ul>

        </li>
      </ul>
    </div>
  );
}

import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { BsPlus } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import { useParams, useLocation } from "react-router-dom";

export default function Assignments() {

  const { cid } = useParams();
  const assignments = db.assignments;
  const { pathname } = useLocation();
  return (

  <div>
  <ul id="wd-modules" className="list-group rounded-1">
    <AssignmentControls /><br /><br /><br />
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className=" p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
        <div className="wd-title">
          <BsGripVertical className="me-2 fs-3" />
          <FaCaretDown className="me-2 fs-5" />
          ASSIGNMENTS
        </div>
        <div className="float-end">
        <div className="d-flex align-items-center mt-3">
          <div
          className="wd-assignment-icon"
            style={{
              display: "inline-block",
              border: "1px solid #ced4da",
              borderRadius: "8px",
              padding: "5px 10px",
              backgroundColor: "#f8f9fa",
              marginRight: "10px",
            }}
          >
            40% of Total
          </div>
          <BsPlus className="fs-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
        </div>
      <ul className="wd-lessons list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <Link
                  to={`${pathname}/${assignment._id}`} // Dynamically route to current path with assignment ID
                  key={assignment._id}
                  className="text-decoration-none"
                >
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuClipboardEdit className="fs-3 green-icon" />
                <div className="d-flex align-items-center justify-content-start flex-grow-1">
                 <ul>
                   <span className="wd-assignment-name">{assignment.title}</span><br />
                   <span className="wd-assignment-color-red"> Multiple Modules </span>
                   <span className="wd-assignment-regular">|</span>
                   <span className="wd-assignment-bold"> Not Available Until </span>
                   <span className="wd-assignment-regular">{assignment.availableFrom}</span><br />
                   <span className="wd-assignment-bold"> Due </span>
                  <span className="wd-assignment-regular"> {assignment.due} |</span>
                   <span className="wd-assignment-regular"> {assignment.points} pts</span>
                 </ul>
               </div>
              </div>
              <div className="d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
            </Link>
          ))}

      </ul>
    </li>
  </ul>
</div>

);
}
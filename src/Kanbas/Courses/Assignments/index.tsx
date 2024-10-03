import ModulesControls from "../Modules/ModulesControls";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { Link } from "react-router-dom";


export default function Assignments() {
    return (
      <div>
      <ul id="wd-modules" className="list-group rounded-0">
      <AssignmentControls /><br /><br /><br />
      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2 fs-5" />
            ASSIGNMENTS
            <IoEllipsisVertical className="float-end fs-4"/>
            <FaPlus className="float-end fs-4"/>
          </div>
          <ul className="wd-lessons list-group rounded-0">
          <Link to="./Editor" className="text-decoration-none">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuClipboardEdit className="fs-3 green-icon"/>
              </div>
              <div className="ms-0">
              <ul>
              <span className="wd-assignment-name">A1</span><br />
                <span className="wd-assignment-color-red"> Multiple Modules </span>
                <span className="wd-assignment-regular">|</span>
                <span className="wd-assignment-bold"> Not Available Until</span>
                <span className="wd-assignment-regular"> May 6 at 12:00am |</span><br />
                <span className="wd-assignment-bold"> Due </span>
                <span className="wd-assignment-regular"> May 13 at 11:59pm |</span>
                <span className="wd-assignment-regular"> 100 pts</span>

              </ul>
              </div>
              <div>
              <LessonControlButtons />
              </div>
            </li>
            </Link>
          </ul>
          <ul className="wd-lessons list-group rounded-0">
          <Link to="./Editor" className="text-decoration-none">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuClipboardEdit className="fs-3 green-icon"/>
              </div>
              <div className="ms-0">
              <ul>
              <span className="wd-assignment-name">A2</span><br />
                <span className="wd-assignment-color-red"> Multiple Modules </span>
                <span className="wd-assignment-regular">|</span>
                <span className="wd-assignment-bold"> Not Available Until</span>
                <span className="wd-assignment-regular"> May 13 at 12:00am |</span><br />
                <span className="wd-assignment-bold"> Due </span>
                <span className="wd-assignment-regular"> May 20 at 11:59pm |</span>
                <span className="wd-assignment-regular"> 100 pts</span>

              </ul>
              </div>
              <div>
              <LessonControlButtons />
              </div>
            </li>
            </Link>
          </ul>
        
          <ul className="wd-lessons list-group rounded-0">
          <Link to="./Editor" className="text-decoration-none">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <LuClipboardEdit className="fs-3 green-icon"/>
              </div>
              <div className="ms-0">
              <ul>
              <span className="wd-assignment-name">A3</span><br />
                <span className="wd-assignment-color-red"> Multiple Modules </span>
                <span className="wd-assignment-regular">|</span>
                <span className="wd-assignment-bold"> Not Available Until</span>
                <span className="wd-assignment-regular"> May 20 at 12:00am |</span><br />
                <span className="wd-assignment-bold"> Due </span>
                <span className="wd-assignment-regular"> May 27 at 11:59pm |</span>
                <span className="wd-assignment-regular"> 100 pts</span>
              </ul>
              </div>
              <div>
              <LessonControlButtons />
              </div>
            </li>
            </Link>
          </ul>


        </li>
      </ul> </div>
  );}  
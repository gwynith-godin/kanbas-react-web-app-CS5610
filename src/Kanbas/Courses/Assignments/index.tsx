import ModulesControls from "../Modules/ModulesControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";



export default function Assignments() {
    return (
      <div>
      <ul id="wd-modules" className="list-group rounded-0">
      <AssignmentControls /><br /><br /><br />
      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <LessonControlButtons/>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development 
              <LessonControlButtons />
              </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" />
            LESSON 1 
            <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" />
            LESSON 2
            <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul> </div>
  );}  
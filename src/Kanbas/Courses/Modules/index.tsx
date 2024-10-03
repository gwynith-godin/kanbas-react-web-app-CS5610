import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function Modules() {
    return (
  <div>
  <ul id="wd-modules" className="list-group rounded-0">
  <ModulesControls /><br /><br />
  <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        Week 1
        <div className="float-end">
          <GreenCheckmark />
          <BsPlus className="fs-2"/>
          <IoEllipsisVertical className="fs-4" />
          </div>
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
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
      Week 2 
      <div className="float-end">
          <GreenCheckmark />
          <BsPlus className="fs-2"/>
          <IoEllipsisVertical className="fs-4" />
          </div>
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES 
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
  
  
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import LightGreenCheckmark from "./LightGreenCheckMark";

const LessonControlButtons = () => {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
};

const LessonControlButtonsLight = () => {
  return (
    <div className="float-end">
      <LightGreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
};

export { LessonControlButtons, LessonControlButtonsLight };
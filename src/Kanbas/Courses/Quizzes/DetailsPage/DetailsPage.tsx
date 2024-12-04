import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import * as assignmentsClient from "../client";
import * as coursesClient from "../../client";
import DetailsPageButtons from "./DetailsPageButtons";
import { editQuiz } from "../reducer";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const { qid } = useSelector((state: any) => state.quizzesReducer || []); // const assignments = db.assignments;

  return (
    <div> 
    < DetailsPageButtons
    />
    </div>
  
  );
}

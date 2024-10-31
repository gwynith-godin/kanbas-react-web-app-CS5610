import { useSelector } from "react-redux";

export default function FacultyRestricted({ children}: { children: any}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser && currentUser.role === "FACULTY") {
    return children;
  } else {
    return <></>
}}

export function StudentRestricted({ children}: { children: any}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser && currentUser.role === "STUDENT") {
    return children;
  } else {
    return <></>
}}
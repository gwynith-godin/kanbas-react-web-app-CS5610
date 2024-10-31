import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {!currentUser && (
        <>
          <Link
            to="/Kanbas/Account/Signin"
            id="wd-course-home-link"
            className="list-group-item active border border-0"
          >
            Signin
          </Link>
          <Link
            to="/Kanbas/Account/Signup"
            id="wd-course-modules-link"
            className="list-group-item text-danger border border-0"
          >
            Signup
          </Link>
        </>
      )}
      {currentUser && (
        <Link
          to="/Kanbas/Account/Profile"
          id="wd-course-modules-link"
          className="list-group-item text-danger border border-0"
        >
          Profile
        </Link>
      )}
    </div>
  );
}

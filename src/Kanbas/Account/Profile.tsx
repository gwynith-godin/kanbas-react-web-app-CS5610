import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username"
             placeholder="alice"
             className="form-control mb-2"/>
      <input id="wd-password"
             placeholder="123"
             className="form-control mb-2"/>
      <input id="wd-firstname"
             value = "Alice"
             placeholder="First Name"
             className="form-control mb-2"/>
      <input id="wd-lastname"
             value = "Wonderland"
             placeholder="Last Name"
             className="form-control mb-2"/>
      <input id="wd-dob"
             value = "yyyy-mm-dd"
             placeholder="DOB"
             type = "date"
             className="form-control mb-2"/>
      <input id="wd-email"
             value = "alice@wonderland.com"
             placeholder="email"
             type = "email"
             className="form-control mb-2"/>
      <select id="wd-user"
             value = "User"
             className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signout-btn"
            to="/Kanbas/Account/Signin"
            className="btn btn-primary wd-signout w-100">
            Sign Out </Link>
    </div>
);}


<div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input id="wd-username"
             placeholder="username"
             className="form-control mb-2"/>
      <input id="wd-password"
             placeholder="password" type="password"
             className="form-control mb-2"/>
      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100">
            Sign in </Link>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>

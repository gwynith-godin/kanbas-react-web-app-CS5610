import { FaCalendarAlt } from "react-icons/fa";
import * as db from "../../Database";
import { useParams, useLocation, Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const { pathname } = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {assignments
        .filter((assignment: any) => assignment.course === cid && assignment._id === aid)
        .map((assignment: any) => (
          <div>
            <div className="assignment-name" key={assignment._id}>
              <label htmlFor="assignment-name">Assignment Name</label>
              <input
                type="text"
                className="form-control mb-3"
                id="assignment-name"
                value={assignment.title} />
            </div>
            <div className="form-group mb-3">
              <div
                className="form-control"
                contentEditable
                style={{ minHeight: '200px', border: '1px solid #ced4da', padding: '10px' }}>
                {assignment.description}
              </div>
            </div>
            <div className="container-fluid d-flex justify-content-end">
              <div className="form-group row">
                <div className="col-sm-12 d-flex justify-content-end">
                  <label className="me-3">Points</label>
                  <input
                    type="text"
                    className="form-control p-6 mb-3"
                    id="assignment-points"
                    value={assignment.points}
                    style={{ width: '350px' }}
                  />
                </div>

                <div className="col-sm-12 d-flex justify-content-end">
                  <label className="me-3">Assignment Group</label>
                  <button
                    className="form-control p-6 mb-3 dropdown-toggle d-flex justify-content-between align-items-center"
                    id="assignment-name-large"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ width: '350px', height: '35px', textAlign: 'left' }}>
                    ASSIGNMENTS
                  </button>
                  <ul className="dropdown-menu">
                    <li><a id="wd-assignments-btn" className="dropdown-item" href="#">ASSIGNMENTS</a></li>
                  </ul>
                </div>
                <div className="col-sm-12 d-flex justify-content-end">
                  <label className="me-3">Display Grade as</label>
                  <button className="form-control p-6 mb-3 dropdown-toggle d-flex justify-content-between align-items-center"
                    id="assignment-name-large"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ width: '350px', height: '35px', textAlign: 'left' }}>
                    Percentage
                  </button>
                  <ul className="dropdown-menu">
                    <li><a
                      id="wd-percentage-btn"
                      className="dropdown-item"
                      href="#">Percentage</a></li>
                  </ul>
                </div>
                <form className="container-fluid mt-3 d-flex justify-content-end" >
                  <label className="me-3">Submission Type</label>
                  <div className="form-group form-group-border">
                    <button className="form-control p-6 mb-3 dropdown-toggle d-flex justify-content-between align-items-center"
                      id="assignment-name-large"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false" style={{ width: '300px', height: '35px', textAlign: 'left' }}>
                      Online
                    </button>
                    <ul className="dropdown-menu">
                      <li><a id="wd-assignments-btn" className="dropdown-item" href="#">Online</a></li>
                    </ul>

                    <label className="wd-checkbox-bold">Online Entry Options</label><br /><br />
                    <div className="checkbox">
                      <label><input type="checkbox" className="me-2" /><span className="wd-checkbox-regular">Text Entry</span><br /></label><br /><br />
                      <label><input type="checkbox" className="me-2" /><span className="wd-checkbox-regular">Website URL</span><br /></label><br /><br />
                      <label><input type="checkbox" className="me-2" /><span className="wd-checkbox-regular">Media Recordings</span><br /></label><br /><br />
                      <label><input type="checkbox" className="me-2" /><span className="wd-checkbox-regular">Student Annotation</span><br /></label><br /><br />
                      <label><input type="checkbox" className="me-2" /><span className="wd-checkbox-regular">File Uploads</span><br /></label><br /><br />
                    </div>
                  </div>
                </form>
                <form className="container mt-3 d-flex justify-content-end">
                  <label className="me-3">Assign</label>
                  <div className="form-group form-group-border">
                    <label className="wd-checkbox-bold">Assign to</label>
                    <div className="form-control p-6 mb-3 d-flex align-items-center"
                      style={{ width: '100%', height: '35px', textAlign: 'left' }}>
                      <div className="tag d-flex align-items-center"
                        style={{ background: '#f1f1f1', borderRadius: '0px', padding: '2px 10px', display: 'inline-flex' }}>
                        Everyone
                        <button
                          type="button"
                          className="ms-2 btn-close"
                          aria-label="Close"
                          style={{ fontSize: '12px', padding: '0', marginLeft: '5px' }}
                        />
                      </div>
                    </div>

                    <label className="wd-checkbox-bold">Due</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={assignment.due}
                        aria-label="Due date"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2"><FaCalendarAlt /></span>
                    </div>

                    <div className="container mt-3 p-0">
                      <div className="row">
                        <div className="col-sm">
                          <label className="wd-checkbox-bold">Available From</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={assignment.availableFrom}
                              aria-label="Available from date"
                              aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text" id="basic-addon2"><FaCalendarAlt /></span>
                          </div>
                        </div>
                        <div className="col-sm">
                          <label className="wd-checkbox-bold">Until</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Until date"
                              aria-label="Until date"
                              aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text" id="basic-addon2"><FaCalendarAlt /></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="wd-edit-controls" className="text-nowrap">
                  <hr className="mt-auto" style={{ marginTop: 'auto' }} />
                </div>
                <div className="d-flex justify-content-end">
                  <Link
                    to={`${pathname.split('/').slice(0, -1).join('/')}`} // Dynamically route back to Assignments
                    className="text-decoration-none">
                    <button id="wd-view-progress-btn" className="btn btn-md btn-secondary me-1">
                      Cancel
                    </button>
                    <button id="wd-add-module-btn" className="btn btn-md btn-danger me-2">
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        ))}

    </div>
  );
}
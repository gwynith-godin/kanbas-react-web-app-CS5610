import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "NodeJS with ExpressJS",
    course: "Web Development",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75 mb-2"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      <a
        id="wd-update-assignment-score"
        className="btn btn-warning float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        className="form-control w-50 mb-2"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />

      <a
        id="wd-update-assignment-completed"
        className="btn btn-danger float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-assignment-completed">
          {assignment.completed ? "Yes" : "No"}
        </label>
      </div>
      <hr />

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
      <h4>Retrieving Module Properties</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <hr />
      <h4>Modifying Module Properties</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end mb-2"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name
      </a>
      <input
        className="form-control w-75 mb-2"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        id="wd-update-module-description"
        className="btn btn-warning float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>
      <input
        className="form-control w-75"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
    </div>
  );
}
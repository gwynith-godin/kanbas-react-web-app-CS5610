import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FacultyRestricted from "./Common/ProtectedRoutes";
import { StudentRestricted } from "./Common/ProtectedRoutes";
import { useEffect, useState } from "react";
import { addEnrollment, deleteEnrollment } from "./Courses/reducer";
import { useDispatch } from "react-redux";
import * as coursesClient from "./Courses/client";
import { current } from "@reduxjs/toolkit";


export default function Dashboard({
  courses,
  course,
  setCourse,
  setCourses,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling, 
  setEnrolling, 
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  setCourses: (courses: any[]) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [enrollmentToDelete, setEnrollmentToDelete] = useState<{ _id: string; user: string; course: string; } | null>(null);
  const [coursesLoaded, setCoursesLoaded] = useState(false);
  const dispatch = useDispatch();
  const [unenrolledCourses, setUnenrolledCourses] = useState<any[]>([]);

  const [enrollmentFilterState, setEnrollmentFilterState] =
    useState(currentUser.role === "FACULTY"? "all": "enrolled");


  const handleEnrollmentClick = async () => {
    const allCourses = await coursesClient.fetchAllCourses();
    const coursesWithEnrollmentStatus = allCourses.map((course: any) => ({
      ...course,
      isEnrolled: isEnrolled(course._id),
    }));
    if (!coursesLoaded){
      setCourses(allCourses);
      setCoursesLoaded(true);
      setUnenrolledCourses(coursesWithEnrollmentStatus);
      setEnrollmentFilterState("all");
    }
    else{
      setCourse(coursesWithEnrollmentStatus);
      setEnrollmentFilterState("enrolled");
      setCoursesLoaded(false);
    }
  };

  const handleEnrollClick = async (course: any) => {
    // alert("newEnrollment");
    // const newEnrollment = await coursesClient.enrollUserInCourse(currentUser._id, course._id);
    // alert(newEnrollment);
    dispatch(
      addEnrollment({ _id: Date.now(),
      user: currentUser._id,
      course: course._id}))};
        // newEnrollment}))};

  const handleUnEnrollClick = async (course: any) => {

    // alert("eId._id");

    const eId = enrollments.find(
      (enrollment: any) => (enrollment.course === course._id) && (enrollment.user === currentUser._id)
    );
    
    // await coursesClient.unEnrollFromCourse(eId._id);
    dispatch(deleteEnrollment(eId._id));

    const updatedCourses = courses.filter((c: any) => c._id !== course._id);
    setCourses(updatedCourses);
  };

  const isEnrolled = (course: any) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    );
  };


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
        
        </h1> <hr />
      <FacultyRestricted>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <input
          defaultValue={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          defaultValue={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />

        <hr />
      </FacultyRestricted>
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
        <StudentRestricted>
          <button
            className="btn btn-primary float-end me-2"
            onClick={handleEnrollmentClick}
            id="wd-update-course-click"
          >
            Enrollments
          </button>
        </StudentRestricted>
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            // .filter((course) =>
            //   enrollmentFilterState === "enrolled" ? isEnrolled(course) : true
            // )
            .map((course) => (
              <div
                key={course._id}
                className="wd-dashboard-course col"
                style={{ width: "270px" }}
                id={course.cid}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    key={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <img
                      src={`/images/${course.imageLink}`}
                      alt=""
                      width="100%"
                      height={160}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button  
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                        className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                          )}
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary"> Go </button>
                      <FacultyRestricted>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id={`wd-edit-course-click-${course._id}`}
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </FacultyRestricted>
                      <StudentRestricted>
                        <button
                          className="btn btn-success float-end me-2"
                          onClick={(e) => {
                            e.preventDefault();
                            handleEnrollClick(course);
                          }}
                          id="wd-update-course-click"
                          hidden={isEnrolled(course)}
                        >
                          Enroll
                        </button>
                        <button
                          className="btn btn-danger float-end me-2"
                          onClick={(e) => {
                            // alert(enrollments._id);
                            e.preventDefault();
                            handleUnEnrollClick(course);
                          }}
                          id="wd-update-course-click"
                          hidden={!isEnrolled(course)}
                        >
                          Unenroll
                        </button>
                      </StudentRestricted>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}



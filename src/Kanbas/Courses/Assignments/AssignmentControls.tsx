import { FaPlus } from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { GoPlus } from "react-icons/go";

export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
        <div>
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment</button>
        </div>
        <div>
        <button id="wd-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group </button>
        </div>
        <div>
            <input 
                id="wd-search-input"
                type="text"
                className="form-control me-5 float-left"
                placeholder="Search..."
                style={{ width: "200px" }} 
            />
            </div>
        
      </div>
    );
}
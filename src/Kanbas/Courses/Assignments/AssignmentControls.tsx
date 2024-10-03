import { FaPlus } from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

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
        <div className="input-group" style={{ width: "200px" }}>
            <span className="input-group-text bg-white border-end-0">
                <FaSearch />
            </span>
            <input 
                id="wd-search-input"
                type="text"
                className="form-control border-start-0"
                placeholder="Search..."
            />
            </div>
        
      </div>
    );
}
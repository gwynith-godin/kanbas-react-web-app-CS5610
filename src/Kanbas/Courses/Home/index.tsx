import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <table id="wd-home">
      <tr>
        <td valign="top">
          <button>Collapse All</button> 
          <button>View Progress</button> 
          <select id="wd-publish-all">
            <option value="Publish All">Publish All</option>
          </select>
          <button>+ Module</button>
          <Modules />
        </td>
        <td valign="top">
          <CourseStatus />
        </td>
      </tr>
</table>
  );
}

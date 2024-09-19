export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of
          you Web application running on Netlify. The landing page should include the following:
          Your full name and section Links to each of the lab assignments. Link to the 
          Kanbas application. Links to all relevant source code repositories. The
          Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
          <label htmlFor="wd-assignment-group"> Assignment Group </label><br/>
          </td>
          <select id="wd-assignments">
          <option value="Assignments">Assignments</option>
          </select>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
          <label htmlFor="wd-display-grade"> Display Grade as </label><br/>
          </td>
          <select id="wd-grade">
          <option value="Grade">Percentage</option>
          </select>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
          <label htmlFor="wd-submission-type"> Submission Type </label><br/>
          </td>
          <select id="wd-submission">
          <option value="Submission">Online</option>
          </select>
        </tr>
        <br/>
        <tr>
        <td align="right" valign="top">
          <label>Online Entry Options</label><br/>
        </td>
        <br/>
          <input type="checkbox" name="check-entry" id="wd-chkbox-text-entry"/>
          <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br/>

          <input type="checkbox" name="check-entry" id="wd-chkbox-url"/>
          <label htmlFor="wd-chkbox-url">Website URL</label><br/>

          <input type="checkbox" name="check-entry" id="wd-chkbox-media"/>
          <label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

          <input type="checkbox" name="check-entry" id="wd-chkbox-stud-ann"/>
          <label htmlFor="wd-chkbox-stud-ann">Student Annotations</label><br/>

          <input type="checkbox" name="check-entry" id="wd-chkbox-file-upload"/>
          <label htmlFor="wd-chkbox-file-upload">File Uploads</label>
      </tr>
      <br />
      <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-assign-to">Assign to</label>
        </td>
        <input id="wd-assign-to" value="Everyone" />
        </tr>
        <br />
      <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-due">Due</label>
        </td>
        <input type="date" id="wd-due" name="start-date" value="2024-05-13"/>
        </tr>
        <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-available-from">Available from</label>
        </td>
        <input type="date" id="wd-available-from" name="start-date" value="2024-05-06"/>
        </tr>
        <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-available-until">Until</label>
        </td>
        <input type="date" id="wd-available-until" name="start-date" value="2024-05-20"/>
        </tr>
        <br />
        <tr>
          <button>Cancel</button> <button>Save</button>
        </tr>
      </table>
    </div>
);}

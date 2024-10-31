import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement}
      className="btn btn-lg btn-success m-1">
        Add Element</button>
    <div className="row m-1">
      <ul className="list-group w-50">
        {array.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <h2>{item}</h2>
            <button className = "btn btn-lg btn-danger me-1"
            onClick={() => deleteElement(index)}
                    id="wd-delete-element-click">
              Delete</button>
          </li>
        ))}
      </ul>
      </div>
      <hr/>
    </div>
  );
}


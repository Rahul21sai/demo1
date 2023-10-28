import React from "react";
import "./styles.css";
function ViewTableRow(props) {
  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.password}</td>
      <button>Edit</button>
      <button>Delete</button>
    </tr>
  );
}

export default ViewTableRow;
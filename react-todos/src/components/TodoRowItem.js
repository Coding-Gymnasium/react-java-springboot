import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function TodoRowItem(props) {
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td onClick={() => props.deleteTodo(props.rowNumber)}>
        <IconContext.Provider
          value={{
            style: { cursor: "pointer" },
            color: "red",
            className: "global-class-name",
          }}
        >
          <FaTrash />
        </IconContext.Provider>
      </td>
    </tr>
  );
}

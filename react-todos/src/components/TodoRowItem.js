export  default function TodoRowItem(props) {
 return (
    <tr>
      <th scope='row'>{props.number}</th>
      <td>{props.task}</td>
      <td>{props.assignee}</td>
    </tr>
 ) 
}

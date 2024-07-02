import "./App.css";
import TodoRowItem from "./components/TodoRowItem";

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem number={1} task={"Feed dog"} assignee={"Eric"} />
              <TodoRowItem number={2} task={"Get haircut"} assignee={"Eric"} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

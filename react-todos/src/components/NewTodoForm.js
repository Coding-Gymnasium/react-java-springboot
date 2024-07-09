import { useState } from "react";

export default function NewTodoForm() {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAssigned(e.target.value)}
            value={assigned}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            row={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button type="button" className="btn btn-primary mt-3">
          Add ToDo
        </button>
      </form>
    </div>
  );
}

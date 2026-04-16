const TaskItem = ({ item, toggleTask, deleteTask }) => {
  return (
    <>
      <tr>
        <td style={{ width: "40%" }}>
          <span
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </span>
        </td>
        <td style={{ width: "15%" }}>
          <span>{item.completed ? "Compeleted" : "In-Progress"}</span>
        </td>
        <td style={{ width: "15%" }}>
          <span>{item.completedDate || "-"}</span>
        </td>

        <td style={{ width: "15%" }} className="text-center align-middle">
          <button
            style={{ minWidth: 120 }}
            onClick={() => {
              toggleTask(item);
            }}
            className="btn btn-secondary"
          >
            {!item.completed ? "Done" : "Undo"}
          </button>
        </td>
        <td style={{ width: "15%" }} className="text-center align-middle">
          <button
            style={{ minWidth: 120 }}
            onClick={() => {
              deleteTask(item);
            }}
            className="btn btn-danger"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};
export default TaskItem;

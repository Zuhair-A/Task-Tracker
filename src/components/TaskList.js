import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="table-responsive mt-5">
      <table
        className="table-bordered"
        style={{ marginTop: 50, width: "100%" }}
      >
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Completion date</th>
            <th colSpan="2" style={{ textAlign: "center" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

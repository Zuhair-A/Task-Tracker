const TaskInput = ({ task, setTask, addTask }) => {
  return (
    <div className="row">
      <div className="col-sm-8 col-md-9">
        <input
          style={{ width: "100%", height: 40, marginBottom: 20 }}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="col-sm-4 col-md-3">
        <button
          onClick={addTask}
          style={{ width: "100%", height: 40 }}
          className="btn btn-success"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};
export default TaskInput;

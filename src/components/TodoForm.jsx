import React from "react";

const TodoForm = ({task, setTask, setTaskList}) => {
  return (
    <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Write todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg bg-green-600 text-white px-3 py-1 shrink-0"
          onClick={() => setTaskList(previous => [...previous, task])}
        >Add</button>
      </form>
  );
};

export default TodoForm;

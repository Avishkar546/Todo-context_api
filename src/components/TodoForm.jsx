import React, { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const[todo, setTodo] = useState('');
  const {addTodo} = useTodo();

  return (
    <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Write todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg bg-green-600 text-white px-3 py-1 shrink-0"
          onClick={() => addTodo({task:todo, completed:false})}
        >Add</button>
      </form>
  );
};

export default TodoForm;

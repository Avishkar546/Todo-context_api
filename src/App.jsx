import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTodo = (todo) => {
    console.log(todo);
    setTaskList((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTaskList((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTaskList((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTaskList((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos =
      localStorage.getItem("todos") &&
      JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTaskList(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList));
  }, [taskList, setTaskList]);

  return (
    <TodoContextProvider
      value={{ taskList, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {taskList.length > 0 &&
              taskList.map((task) => <TodoItem todo={task} key={task.id} />)}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;

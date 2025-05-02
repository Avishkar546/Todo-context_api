import { useState } from "react";
// import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoContextProvider } from "./context";

function App() {
  const [taskList, setTaskList] = useState(["abcd", "efghjikl"]);
  const [task, setTask] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const addTodo = (todo) => {
    setTaskList(prev => [...prev, {id: Date.now(), ...todo}]);
  }

  const updateTodo = (id, todo) => {
    setTaskList(prev => prev.map(prevTodo => (prevTodo.id === id)? todo : prevTodo));
  }

  const deleteTodo = (id) => {
    setTaskList(prev => prev.filter(prevTodo => (prevTodo.id !== id)));
  }

  const toggleComplete = (id) => {
    setTaskList(prev => prev.map(prevTodo => (prevTodo.id === id)? (prevTodo.completed = true) : prevTodo))
  }

  return (
    <TodoContextProvider
      value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm setTask={setTask} setTaskList={setTaskList} task={task} />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <ul>
              {taskList.map((t, index) => (
                <div key={index}>
                  <input type="checkbox" />
                  <input type="text" value={t} readOnly={!isEditable} />
                  <button onClick={() => setIsEditable((edit) => !edit)}>
                    {isEditable ? "save" : "Edit"}
                  </button>
                  <button>Delete</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;

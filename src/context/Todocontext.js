import { createContext, useContext } from "react";


export const TodoContext = createContext({
    taskList: [
        {
            id: 1,
            task: 'Learn DSA',
            completed: false
        }
    ],
    // We can directly use methods instead import them everytime
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;
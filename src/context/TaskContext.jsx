import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    //Se ejecuta cuando carga el componente
    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task) {
        setTasks([...tasks, {
            id: tasks.length + 1,
            title: task.title,
            description: task.description
        }])
    };

    function deleteTask(id) {
        console.log(id);
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )

}
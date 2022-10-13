import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
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

    const messageInfo = (text) => toast.info(text, {
        position: "top-center",
        closeOnClick: true,
        autoClose: 3000,
    });

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask,
            messageInfo: messageInfo
        }}>
            {props.children}
        </TaskContext.Provider>
    )

}
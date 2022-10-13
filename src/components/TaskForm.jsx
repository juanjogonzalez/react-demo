import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { createTask, messageInfo } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length > 0  && description.length > 0)
        {
            const newTask = {
                title: title,
                description: description
            };
            createTask(newTask);
            setTitle('');
            setDescription('');
        }
        else
        {
            messageInfo("Ingrese Título y descripción")
        }
        
    }    

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                    className='bg-slate-300 p-3 w-full mb-2'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus />
                <textarea placeholder='descripcion de la tarea'
                    className='bg-slate-300 p-3 w-full mb-2'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}></textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white'>
                    Guardar
                </button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default TaskForm
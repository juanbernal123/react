import { useState } from "react"

const Form = ({ tasks, setTasks }) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1

    const initTask = {
        id: lastId,
        task: "",
        description: "",
        status: false
    }

    const [task, setTask] = useState(initTask)

    const handleChange = (e) => {
        e.preventDefault()
        setTask({
            ...task,
            [e.target.name]: stringCapitalize(e.target.value)
        })
    }

    const saveTask = () => {
        let newTask = [...tasks]

        if (task.task === "") {
            alert('La tarea es obligatoria')
            return false
        }
        newTask.push(task)
        setTasks(newTask)
        resetForm(newTask)
    }

    const resetForm = (newTask) => {
        let nextTask = { ...initTask, id: newTask.length + 1 }
        setTask(nextTask)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveTask()
        }
    }

    const stringCapitalize = (text) => {
        return text ? text[0].toUpperCase() +text.slice(1) : ''
    }

    return (
        <>
            <h1 className="text-center mt-3">Tareas React + Vite + Bootstrap 5</h1><div className="card mb-3">
                <div className="card-body">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="fw-bold">Tarea</label>
                                <input
                                    type="text"
                                    name="task"
                                    className="form-control"
                                    value={task.task}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="fw-bold">Descripción</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    value={task.description}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button
                                className="btn btn-primary"
                                onClick={saveTask}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
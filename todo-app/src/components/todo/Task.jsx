const Task = ({ task, name, description, status, handleUpdateTask, handleDeleteTask }) => {
    let taskClass = status
        ? 'd-flex justify-content-between align-items-center bg-light opacity-50'
        : 'd-flex justify-content-between align-items-center'

    let textClass = status
        ? 'fw-bold fs-4 d-flex gap-2 text-decoration-line-through'
        : 'fw-bold fs-4 d-flex gap-2'

    let checked = status ? 'checked' : ''

    return (
        <>
            <section
                className={taskClass}>
                <div className="d-flex flex-column">
                    <span className={textClass}>
                        <input type="checkbox" onClick={() => handleUpdateTask(task.id)} id={ task.id } checked={checked}/>
                        <label htmlFor={ task.id }>{ task.id }. {name}</label>
                    </span>
                    <span className="text-muted pb-3">{description}</span>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTask(task.id)} disabled={status}>Eliminar</button>
                </div>
            </section>
        </>
    )
}

export default Task
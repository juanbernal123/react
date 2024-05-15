import Task from "./Task";

const TodoList = ({ tasks, setTasks }) => {

    const handleUpdateTask = (id) => {
        const taskUpdated = tasks.map((element) => {
            if (element.id === id) {
                return { ...element, status: !element.status }
            }
            return element
        })
        setTasks(taskUpdated)
    }

    const handleDeleteTask = (id) => {
        const taskUpdated = tasks.filter((element) => { return element.id != id })
        setTasks(taskUpdated)
    }

    return (
        <>
            {
                tasks.map((value, index) => {
                    return (
                        <Task
                            name={value.task}
                            task={value}
                            description={value.description}
                            status={value.status}
                            handleUpdateTask={handleUpdateTask}
                            handleDeleteTask={handleDeleteTask}
                            key={index} />
                    )
                })
            }
        </>
    )
}

export default TodoList
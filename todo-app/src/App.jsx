import { useState } from "react";
import Form from "./components/todo/Form";
import TodoList from "./components/todo/TodoList";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "Agendar reunión",
            description: "Realizar justa con directivos",
            status: true
        },
        {
            id: 2,
            task: "Llamar a Juan Bernal",
            description: "Contratar a este desarrollador autodidacta",
            status: false
        },
    ])

    return (
        <>
            <div className="container">
                <Form
                    tasks={tasks}
                    setTasks={setTasks} />

                <TodoList
                    tasks={tasks}
                    setTasks={setTasks} />
            </div>
        </>
    )
}

export default App

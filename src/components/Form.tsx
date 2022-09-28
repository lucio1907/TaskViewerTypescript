import React, { useState } from "react"

interface Task {
    name: string
    done: boolean
}

const Form = (): JSX.Element => {
    const [newTask, setNewTask] = useState<string>('')
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        addTask(newTask)
    }

    const addTask = (t: string) => {
        const newTasks = [...tasks, { name: t, done: false }]
        setTasks(newTasks);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className='bg-slate-300 outline-none rounded p-3 md:w-96 focus-visible:bg-slate-400' autoFocus onChange={handleOnChange} />
                <div className='flex justify-center'>
                    <button className='p-3 md:w-44 bg-sky-300 mt-5 rounded-md hover:bg-sky-400 transition-all duration-300'>Save Task!</button>
                </div>
                <div>
                    {tasks.map((task: Task, i: number) => (
                        <div key={i}>
                            <p>{task.name}</p>
                        </div>
                    ))}
                </div>
            </form>
        </>
    )
}

export default Form
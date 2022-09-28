import React, { Dispatch, SetStateAction, useState } from "react"
import { Task } from '../interfaces/taskInterface'

interface Props {
    setTasks: Dispatch<SetStateAction<Task[]>>
    tasks: Task[]
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>

const Form = ({ setTasks, tasks }: Props) => {
    const [newTask, setNewTask] = useState<string>('');

    const handleOnChange = (e: ChangeEvent): void => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        addTask(newTask);
    }

    const addTask = (t: string) => {
        const newTasks = [...tasks, { name: t, done: false }]
        setTasks(newTasks);
        setNewTask('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='bg-slate-300 outline-none rounded p-3 md:w-96 focus-visible:bg-slate-400'
                    onChange={handleOnChange}
                    value={newTask}
                    autoFocus
                    minLength={3} />
                <div className='flex justify-center'>
                    <button
                        className={`p-3 md:w-2/4 bg-sky-300 mt-5 rounded-md transition-all duration-300 ${!newTask ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-sky-400'}`}
                        disabled={!newTask ? true : false}
                    >
                        Save Task!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
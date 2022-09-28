import React, { Dispatch, SetStateAction, useReducer, useState } from 'react'
import { Task } from '../interfaces/taskInterface'

interface Props {
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<Task[]>>
}

type Event = React.MouseEvent<HTMLButtonElement>

const ShowTasks = ({ tasks, setTasks }: Props) => {
    const [done, setDone] = useState<boolean>(false);
    const checkedTask = (i: number) => {
        if (tasks[i].done === false) {
            tasks[i].done = true;
            setDone(!done);
            return;
        } else if (tasks[i].done === true) {
            tasks[i].done = false;
            setDone(!done);
            return;
        }
    }

    const deleteTask = (id: number, e: Event) => {
        const newTask: Task[] = [...tasks];
        newTask.splice(id, 1)
        setTasks(newTask)
    }

    return (
        <div className='flex w-full justify-center'>
            <div className='md:min-w-min flex gap-7 flex-col mt-7 '>
                {tasks.map((task: Task, i: number) => (
                    <div key={i} className="w-full text-center md:text-start shadow p-4 flex flex-col items-center md:flex-row justify-between bg-sky-300">
                        <div className='w-64 md:w-96 p-3 bg-slate-200 rounded h-full'>
                            <p className={`font-medium md:text-2xl ${tasks[i].done ? 'line-through' : ''}`} style={{ overflowWrap: 'break-word' }}>{task.name}</p>
                        </div>
                        <div className='flex flex-col gap-10 px-7 mt-4'>
                            <button
                                onClick={() => checkedTask(i)}
                                className={`p-2 rounded-md w-24 lg:w-36 ${tasks[i].done ? 'bg-green-500' : 'bg-green-400'}`}
                            >
                                {tasks[i].done === true ? 'Checked 🗸' : 'Check'}
                            </button>
                            <button className='bg-red-500 p-2 rounded-md w-24 text-white lg:w-36' onClick={(e) => deleteTask(i, e)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowTasks
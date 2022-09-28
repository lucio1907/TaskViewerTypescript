import React, { useReducer, useState } from 'react'
import { Task } from '../interfaces/taskInterface'

interface Props {
    tasks: Task[]
}

const ShowTasks = ({ tasks }: Props) => {
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

    return (
        <div className='flex w-full justify-center'>
            <div className='w-full flex gap-7 flex-col mt-7 bg-sky-300 md:w-2/4'>
                {tasks.map((task: Task, i: number) => (
                    <div key={i} className="w-full text-center md:text-start shadow p-4 flex flex-col items-center md:flex-row justify-between">
                        <p className={tasks[i].done ? 'line-through' : ''}>{task.name}</p>
                        <div className='flex gap-10 px-7 mt-4'>
                            <button
                                onClick={() => checkedTask(i)}
                                className={`p-2 rounded-md ${tasks[i].done ? 'bg-green-500' : 'bg-green-400'}`}
                            >
                                {tasks[i].done === true ? 'Checked' : 'Check'}
                            </button>
                            <button className='bg-red-500 p-2 rounded-md text-white'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowTasks
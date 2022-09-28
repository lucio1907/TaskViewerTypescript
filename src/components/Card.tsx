import { Dispatch, SetStateAction } from "react"
import Form from "./Form"
import { Task } from "../interfaces/taskInterface"

interface Props {
    setTasks: Dispatch<SetStateAction<Task[]>>
    tasks: Task[]
}

const Card = ({ setTasks, tasks }: Props) => {
    return (
        <div className='flex justify-center mt-10'>
            <div className='flex flex-col items-center justify-center gap-12 h-96 bg-slate-100 p-10 rounded-md md:w-2/4'>
                <h1 className="font-bold uppercase">Save your Task!</h1>
                <Form setTasks={setTasks} tasks={tasks} />
            </div>
        </div>
    )
}

export default Card
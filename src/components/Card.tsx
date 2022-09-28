import Form from "./Form"

const Card = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col items-center justify-center gap-12 h-96 bg-slate-100 p-10'>
                <h1 className="font-bold uppercase">Save your Task!</h1>
                <Form />
            </div>
        </div>
    )
}

export default Card
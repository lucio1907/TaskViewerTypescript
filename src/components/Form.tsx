

const Form = () => {
    return (
        <form>
            <input type="text" className='bg-slate-300 outline-none rounded p-3 md:w-96 focus-visible:bg-slate-400' autoFocus />
            <div className='flex justify-center'>
                <button className='p-3 md:w-44 bg-sky-300 mt-5 rounded-md hover:bg-sky-400 transition-all duration-300'>Save Task!</button>
            </div>
        </form>
    )
}

export default Form
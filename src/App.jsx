import './App.css';

function App() {
    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-center gap-10 p-4'>
            <section className='max-w-7xl mt-5'>
                <h1 className='text-5xl uppercase text-center font-semibold text-slate-600'>
                    Ram API Movies
                </h1>
            </section>
            <section className='max-w-7xl mt-40'>
                <div className='w-full'>
                    <div className='relative px-3 flex justify-between items-center w-[300px] md:w-[500px] h-16 rounded-lg shadow-lg bg-white overflow-hidden'>
                        <div className='flex items-center h-full w-12 text-gray-300'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                />
                            </svg>
                        </div>

                        <input
                            className='peer h-full w-full outline-none text-sm text-gray-700 pr-2'
                            type='text'
                            id='search'
                            placeholder='Search something..'
                        />
                    </div>
                </div>
            </section>
            <section className='max-w-7xl flex flex-wrap justify-center items-center gap-y-10 gap-x-2'>
                <article className='group flex flex-wrap max-w-[200px] h-[300px] gap-2 cursor-pointer text-left my-[50px] mx-[20px]'>
                    <picture className='overflow-hidden block'>
                        <img
                            src='https://images.unsplash.com/photo-1646065539148-6fafbf306c0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Movie Poster'
                            className='group-hover:scale-125 ease-in duration-150 w-full h-full block object-cover rounded-[5px]'
                        />
                    </picture>
                    <div>
                        <p className='text-sm text-slate-400'>2024</p>
                        <h1 className='text-lg font-semibold text-slate-600'>Moon Knight</h1>
                    </div>
                </article>
                <article className='group flex flex-wrap max-w-[200px] h-[300px] gap-2 cursor-pointer text-left my-[50px] mx-[20px]'>
                    <picture className='overflow-hidden block'>
                        <img
                            src='https://images.unsplash.com/photo-1646065539148-6fafbf306c0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Movie Poster'
                            className='group-hover:scale-125 ease-in duration-150 w-full h-full block object-cover rounded-[5px]'
                        />
                    </picture>
                    <div>
                        <p className='text-sm text-slate-400'>2024</p>
                        <h1 className='text-lg font-semibold text-slate-600'>Moon Knight</h1>
                    </div>
                </article>
                <article className='group flex flex-wrap max-w-[200px] h-[300px] gap-2 cursor-pointer text-left my-[50px] mx-[20px]'>
                    <picture className='overflow-hidden block'>
                        <img
                            src='https://images.unsplash.com/photo-1646065539148-6fafbf306c0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Movie Poster'
                            className='group-hover:scale-125 ease-in duration-150 w-full h-full block object-cover rounded-[5px]'
                        />
                    </picture>
                    <div>
                        <p className='text-sm text-slate-400'>2024</p>
                        <h1 className='text-lg font-semibold text-slate-600'>Moon Knight</h1>
                    </div>
                </article>
                <article className='group flex flex-wrap max-w-[200px] h-[300px] gap-2 cursor-pointer text-left my-[50px] mx-[20px]'>
                    <picture className='overflow-hidden block'>
                        <img
                            src='https://images.unsplash.com/photo-1646065539148-6fafbf306c0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Movie Poster'
                            className='group-hover:scale-125 ease-in duration-150 w-full h-full block object-cover rounded-[5px]'
                        />
                    </picture>
                    <div>
                        <p className='text-sm text-slate-400'>2024</p>
                        <h1 className='text-lg font-semibold text-slate-600'>Moon Knight</h1>
                    </div>
                </article>
                <article className='group flex flex-wrap max-w-[200px] h-[300px] gap-2 cursor-pointer text-left my-[50px] mx-[20px]'>
                    <picture className='overflow-hidden block'>
                        <img
                            src='https://images.unsplash.com/photo-1646065539148-6fafbf306c0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Movie Poster'
                            className='group-hover:scale-125 ease-in duration-150 w-full h-full block object-cover rounded-[5px]'
                        />
                    </picture>
                    <div>
                        <p className='text-sm text-slate-400'>2024</p>
                        <h1 className='text-lg font-semibold text-slate-600'>Moon Knight</h1>
                    </div>
                </article>
                <article className='group flex flex-wrap max-w-[200px] h-[300px] gap-2 cursor-pointer text-left my-[50px] mx-[20px]'>
                    <picture className='overflow-hidden block'>
                        <img
                            src='https://images.unsplash.com/photo-1646065539148-6fafbf306c0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Movie Poster'
                            className='group-hover:scale-125 ease-in duration-150 w-full h-full block object-cover rounded-[5px]'
                        />
                    </picture>
                    <div>
                        <p className='text-sm text-slate-400'>2024</p>
                        <h1 className='text-lg font-semibold text-slate-600'>Moon Knight</h1>
                    </div>
                </article>
                <article className='group flex flex-wrap max-w-[200px] h-[300px] gap-2 cursor-pointer text-left my-[50px] mx-[20px]'>
                    <picture className='overflow-hidden block'>
                        <img
                            src='https://images.unsplash.com/photo-1646065539148-6fafbf306c0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='Movie Poster'
                            className='group-hover:scale-125 ease-in duration-150 w-full h-full block object-cover rounded-[5px]'
                        />
                    </picture>
                    <div>
                        <p className='text-sm text-slate-400'>2024</p>
                        <h1 className='text-lg font-semibold text-slate-600'>Moon Knight</h1>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default App;

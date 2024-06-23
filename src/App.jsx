import './App.css';

function App() {
    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-center gap-10'>
            <section>
                <h1 className='text-5xl font-semibold text-slate-00'>Ram API Movies</h1>
            </section>
            <section className='mt-40'>
                <div className='w-full'>
                    <div className='relative px-3 flex justify-between items-center w-[500px] h-16 rounded-lg shadow-lg bg-white overflow-hidden'>
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
        </div>
    );
}

export default App;

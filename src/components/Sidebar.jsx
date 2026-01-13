import Card from '../layout/Card'
import Button from './Button'
const Sidebar = () => {
    return (
        <div className='lg:col-span-1 space-y-6'>
            <div className='bg-gray-800 rounded-xl p-6 text-white'>
                <h1 className='text-xl font-bold mb-1'>Ahmed Badry</h1>
                <p className='text-sm opacity-50'>FeedBack Board</p>
            </div>

            <Card>
                <div className='flex flex-wrap gap-2'>
                    {/* i will ues map method*/}
                    <button
                        className={`p-4 py-2 rounded-lg text-sm font-semibold
                            transition-all`}
                    >
                        Categories
                    </button>
                </div>
            </Card>

            <Card>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='font-bold text-gray-800'>Roadmap</h2>
                    <p className='text-blue-600 text-sm font-semibold hover:underline'>
                        View
                    </p>
                </div>
            </Card>

            <Card>
                <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 rounded-full bg-orange-400'></div>
                            <span className='text-gray-600 text-sm'>Planned</span>
                        </div>
                        <span className='font-bold text-gray-600'>Planned</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 rounded-full bg-purple-400'></div>
                            <span className=' text-gray-600 text-sm'>In-Progress</span>
                        </div>
                        <span className='font-bold text-gray-600'>In-Progress</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 rounded-full bg-cyan-400'></div>
                            <span className=' text-gray-600 text-sm'>Live</span>
                        </div>
                        <span className='font-bold text-gray-600'>Live</span>
                    </div>

                </div>

                <div className='mt-4'>
                    <Button width={`w-full`}>+ Add Feedback</Button>
                </div>
            </Card>


        </div>
    )
}

export default Sidebar
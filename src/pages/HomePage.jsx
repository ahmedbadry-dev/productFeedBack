import Button from '../components/Button'
import FeedbackList from '../components/FeedbackList'
import Sidebar from '../components/Sidebar'
import React from 'react'

const HomePage = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <Sidebar />

                <div className='lg:col-span-3 space-y-6'>
                    {/*Header*/}
                    <div className='bg-gray-800 rounded-xl p-4 flex flex-col
                        sm:flex-row items-start sm:items-center justify-between gap-4'>
                        <div className='flex items-center gap-4 flex-wrap'>
                            <span className='text-white font-bold'>Suggestion Length</span>
                            <div className='flex items-center gap-2'>
                                <span className='text-gray-300 text-sm'>Sort by:</span>
                                <select
                                    name=""
                                    id=""
                                    className='bg-transparent text-gray-400 font-semibold
                                text-sm border-none outline-none cursor-pointer'
                                >
                                    <option value="most-up-votes">Most Up votes</option>
                                    <option value="least-up-votes">Least Up votes</option>
                                    <option value="most-comments">Most Comments</option>
                                    <option value="least-comments">Least Comments</option>
                                </select>
                            </div>
                        </div>
                        <Button>
                            + Add Feedback
                        </Button>
                    </div>

                    <FeedbackList />
                </div>
            </div>
        </div>
    )
}

export default HomePage
import { Plus, X } from 'lucide-react'
import React from 'react'

const FeedbackModal = () => {
    return (
        <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-xl max-w-lg w-full p-6 max-h[900vh]
                overflow-y-auto '>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>Create New FeedBack</h2>
                    <button className='text-gray-400 hover:text-gray-600'>
                        <X scale={24} />
                    </button>
                </div>

                <form action="">
                    <div className='mb-2'>
                        <label htmlFor="title"
                            className='block text-sm font-bold text-gray-700 mb-2'>
                            Feedback Title
                        </label>
                        <input
                            type="text"
                            name='title'
                            id='title'
                            placeholder='Add a short, description headline'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-100
                                focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="category"
                            className='block text-sm font-bold text-gray-700 mb-2'>
                            Category {" "}
                        </label>
                        <select name="category" id="category"
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value="feature">Feature</option>
                            <option value="ui">UI</option>
                            <option value="ux">UX</option>
                            <option value="enhancement">Enhancement</option>
                            <option value="bug">Bug</option>
                        </select>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="status"
                            className='block text-sm font-bold text-gray-700 mb-2'>
                            Status {" "}
                        </label>
                        <select name="status" id="status"
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value="planned">Planned</option>
                            <option value="in-progress">In Progress</option>
                            <option value="live">Live</option>
                        </select>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="details"
                            className='block text-sm font-bold text-gray-700 mb-2'>
                            Feedback Details
                        </label>
                        <textarea
                            name="details"
                            id="details"
                            rows={4}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg
                                focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div className='flex gap-4 mt-4'>
                        <button className='flex-1 bg-red-600 hover:bg-red-700
                            text-white py-3 rounded-lg font-semibold transition-all'>
                            Delete
                        </button>

                        <button className='flex-1 bg-gray-600 hover:bg-gray-700
                            text-white py-3 rounded-lg font-semibold transition-all'>
                            Cancel
                        </button>

                        <button className='flex-2 sm:flex-1 bg-purple-600 hover:bg-purple-700
                            text-white py-3 rounded-lg font-semibold transition-all'>
                            + Add Feedback
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FeedbackModal

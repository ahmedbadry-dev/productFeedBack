import { useState } from 'react'

const AddComment = ({ onAdd }) => {
    const [value, setValue] = useState('')

    const handlePost = () => {
        if (!value.trim()) return

        onAdd({
            id: crypto.randomUUID(),
            name: 'current user',
            username: '@currentUser',
            avatar: 'https://i.pravatar.cc/150?img=1',
            text: value,
            date: 'just now'
        })

        setValue('')
    }

    return (
        <div className='bg-white rounded-xl p-6'>
            <h3 className='font-bold text-gray-800 text-lg mb-4'>Add Comment</h3>

            <textarea
                className='w-full border border-gray-200 rounded-lg p-4 text-gray-700 resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-500'
                rows={4}
                maxLength={250}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Type your comment here..'
            />

            <div className='flex justify-between items-center mt-4'>
                <span className='text-gray-500 text-sm'>
                    {250 - value.length} Character Left
                </span>

                <button
                    className='bg-purple-600 hover:bg-purple-700
                    disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2
                    rounded-lg font-semibold transition-all'
                    onClick={handlePost}
                    disabled={!value.trim()}
                >
                    Post Comment
                </button>
            </div>
        </div>
    )
}

export default AddComment

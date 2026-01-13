import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {

    //Conditional rendering
    // return (
    //     <div className='bg-white rounded-xl p-12 text-center'>
    //         <p className='text-gray-500 text-lg'>No suggestion found. Add One!</p>
    //     </div>
    // )

    return (
        <div className='space-y-4'>
            {/*i will use map method*/}
            <FeedbackItem />
        </div>
    )
}

export default FeedbackList

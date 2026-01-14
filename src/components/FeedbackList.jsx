import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ suggestions, filterCategory, sortBy, onView, onUpvote }) => {

    // filter category
    const filtered = suggestions.filter(
        s => filterCategory === "All" || s.category === filterCategory
    )

    // sortBy
    const sorted = [...filtered].sort((a, b) => {
        switch (sortBy) {
            case 'most-up-votes':
                return b.upvotes - a.upvotes;
            case 'least-up-votes':
                return a.upvotes - b.upvotes;
            case 'most-comments':
                return b.comments - a.comments;
            case 'least-comments':
                return a.comments - b.comments;
            default:
                return 0; // no sorting
        }
    });


    //Conditional rendering
    if (sorted.length === 0) {
        return (
            <div className='bg-white rounded-xl p-12 text-center'>
                <p className='text-gray-500 text-lg'>No suggestion found. Add One!</p>
            </div>
        )
    }


    return (
        <div className='space-y-4'>
            {
                sorted.map(s => (
                    <FeedbackItem
                        key={s.id}
                        suggestion={s}
                        onUpvote={onUpvote}
                        onView={onView}
                    />
                ))
            }

        </div>
    )
}

export default FeedbackList

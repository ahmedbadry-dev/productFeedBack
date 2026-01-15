import React, { Fragment } from 'react'
import { useFormStatus } from 'react-dom';

const Submit = ({ onClose, editingFeedback, onDelete }) => {
    console.log(editingFeedback, editingFeedback.id);

    const { pending } = useFormStatus();

    return (
        <Fragment>

            <div className='flex gap-4 mt-4'>
                {
                    editingFeedback &&
                    <button
                        className='flex-1 bg-red-600 hover:bg-red-700
                            text-white py-3 rounded-lg font-semibold transition-all'
                        onClick={() => onDelete(editingFeedback.id)}
                        disabled={pending}
                    >
                        {pending ? "Deleting..." : "Delete"}
                    </button>
                }

                <button
                    className='flex-1 bg-gray-600 hover:bg-gray-700
                            text-white py-3 rounded-lg font-semibold transition-all'
                    disabled={pending}
                    onClick={onClose}
                >
                    {pending ? "Canceling..." : "Cancel"}
                </button>

                <button
                    className='flex-2 sm:flex-1 bg-purple-600 hover:bg-purple-700
                            text-white py-3 rounded-lg font-semibold transition-all'
                    type='submit'
                    disabled={pending}
                >
                    {pending && !editingFeedback && 'Adding...'}
                    {pending && editingFeedback && 'Saving...'}
                    {editingFeedback ? 'Save Change' : 'Add Feedback'}
                </button>
            </div>

        </Fragment>
    )
}

export default Submit

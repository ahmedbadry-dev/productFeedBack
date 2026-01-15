import { X } from 'lucide-react'
import { useState, useEffect } from 'react'

const FeedbackModal = ({
    editingFeedback = null,
    onClose,
    onAdd,
    onUpdate,
    onDelete,
}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Feature',
        status: 'Planned',
    })

    const isEditMode = Boolean(editingFeedback)

    // Sync form data
    useEffect(() => {
        if (editingFeedback) {
            setFormData({
                title: editingFeedback.title || '',
                description: editingFeedback.description || '',
                category: editingFeedback.category || 'Feature',
                status: editingFeedback.status || 'Planned',
            })
        } else {
            setFormData({
                title: '',
                description: '',
                category: 'Feature',
                status: 'Planned',
            })
        }
    }, [editingFeedback])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEditMode) {
            onUpdate?.({ ...editingFeedback, ...formData })
        } else {
            onAdd?.({
                id: crypto.randomUUID(),
                title: formData.title,
                description: formData.description,
                category: formData.category || 'Feature',
                status: formData.status || 'Planned',
                upvotes: 0,
                comments: 0,
                upvoted: false
            })
        }
    }

    const handleDelete = () => {
        if (!editingFeedback) return
        if (window.confirm('Are you sure?')) {
            onDelete?.(editingFeedback.id)
        }
    }

    return (
        <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-xl max-w-lg w-full p-6 max-h[900vh]
                overflow-y-auto '>

                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>
                        {isEditMode ? 'Edit Feedback' : 'Create New FeedBack'}
                    </h2>
                    <button
                        className='text-gray-400 hover:text-gray-600'
                        onClick={onClose}
                        type='button'
                    >
                        <X scale={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='mb-2'>
                        <label className='block text-sm font-bold text-gray-700 mb-2'>
                            Feedback Title
                        </label>
                        <input
                            type="text"
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            placeholder='Add a short, description headline'
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-100
                            focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>

                    <div className='mb-2'>
                        <label className='block text-sm font-bold text-gray-700 mb-2'>
                            Category
                        </label>
                        <select
                            value={formData.category}
                            onChange={handleChange}
                            name="category"
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg
                            focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value="Feature">Feature</option>
                            <option value="Ui">UI</option>
                            <option value="Ux">UX</option>
                            <option value="Enhancement">Enhancement</option>
                            <option value="Bug">Bug</option>
                        </select>
                    </div>

                    <div className='mb-2'>
                        <label className='block text-sm font-bold text-gray-700 mb-2'>
                            Status
                        </label>
                        <select
                            value={formData.status}
                            onChange={handleChange}
                            name="status"
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg
                            focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value="Planned">Planned</option>
                            <option value="In-Progress">In Progress</option>
                            <option value="Live">Live</option>
                        </select>
                    </div>

                    <div className='mb-2'>
                        <label className='block text-sm font-bold text-gray-700 mb-2'>
                            Feedback Details
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={handleChange}
                            name="description"
                            rows={4}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg
                            focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>

                    <div className='flex gap-4 mt-4'>
                        {isEditMode && (
                            <button
                                type='button'
                                className='flex-1 bg-red-600 hover:bg-red-700
                                text-white py-3 rounded-lg font-semibold transition-all'
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        )}

                        <button
                            type='button'
                            className='flex-1 bg-gray-600 hover:bg-gray-700
                            text-white py-3 rounded-lg font-semibold transition-all'
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type='submit'
                            className='flex-2 sm:flex-1 bg-purple-600 hover:bg-purple-700
                            text-white py-3 rounded-lg font-semibold transition-all'
                        >
                            {isEditMode ? 'Save Change' : 'Add Feedback'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FeedbackModal

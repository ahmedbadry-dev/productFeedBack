import { X } from 'lucide-react'
import Submit from './Submit';
import { useState } from 'react';

const FeedbackModal = ({ isOpen, onClose, onAdd, editingFeedback }) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Feature',
        status: 'Planned',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // useEffect()

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        const newSuggestion = {
            id: crypto.randomUUID(),
            title: formData.title,
            description: formData.description,
            category: formData.category || 'Feature',
            status: formData.status || 'Planned',
            upvotes: 0,
            comments: 0,
            upvoted: false
        }

        onAdd(newSuggestion)
        onClose()
    }

    return (
        <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-xl max-w-lg w-full p-6 max-h[900vh]
                overflow-y-auto '>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>Create New FeedBack</h2>
                    <button
                        className='text-gray-400 hover:text-gray-600'
                        onClick={onClose}
                    >
                        <X scale={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='mb-2'>
                        <label htmlFor="title"
                            className='block text-sm font-bold text-gray-700 mb-2'>
                            Feedback Title
                        </label>
                        <input
                            type="text"
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
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
                        <select
                            value={formData.category}
                            onChange={handleChange}
                            name="category"
                            id="category"
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
                        <label htmlFor="status"
                            className='block text-sm font-bold text-gray-700 mb-2'>
                            Status {" "}
                        </label>
                        <select
                            value={formData.status}
                            onChange={handleChange}
                            name="status"
                            id="status"
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg
                                                focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value="Planned">Planned</option>
                            <option value="In-Progress">In Progress</option>
                            <option value="Live">Live</option>
                        </select>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="description"
                            className='block text-sm font-bold text-gray-700 mb-2'>
                            Feedback Details
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={handleChange}
                            name="description"
                            id="description"
                            rows={4}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg
                                                focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <Submit onClose={onClose} />
                </form>
            </div>
        </div>
    )
}

export default FeedbackModal

import { useMemo, useState, useCallback } from 'react'
import Button from '../components/Button'
import FeedbackList from '../components/FeedbackList'
import FeedbackModal from '../components/FeedbackModal'
import Sidebar from '../components/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addSuggestion, toggleUpvote } from '../feature/feedbackSlice'

const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    // Redux data
    const suggestions = useSelector(state => state.feedback.suggestions)

    // UI local state
    const [filterCategory, setFilterCategory] = useState('All')
    const [sortBy, setSortBy] = useState('most-up-votes')

    // Route-based modal state
    const isAddRoute = location.pathname.endsWith('/add')

    // Roadmap counts (single pass)
    const roadmapCounts = useMemo(() => {
        const counts = { planned: 0, inProgress: 0, live: 0 }

        for (const s of suggestions) {
            if (s.status === 'Planned') counts.planned++
            if (s.status === 'In-Progress') counts.inProgress++
            if (s.status === 'Live') counts.live++
        }

        return counts
    }, [suggestions])

    // Navigation handlers
    const openModel = () => navigate('/add')
    const closeModel = () => navigate('/', { replace: true })

    // Action handlers
    const handleAdd = useCallback(
        (payload) => {
            dispatch(addSuggestion(payload))
            closeModel()
        },
        [dispatch]
    )

    const handleUpvotes = useCallback(
        (id) => {
            dispatch(toggleUpvote({ id }))
        },
        [dispatch]
    )

    const handleView = useCallback(
        (item) => {
            navigate(`/feedback/${item.id}`)
        },
        [navigate]
    )

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <Sidebar
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                    roadmapCounts={roadmapCounts}
                    openRoadmap={() => navigate('/roadmap')}
                    openModel={openModel}
                />

                <div className='lg:col-span-3 space-y-6'>
                    {/* Header */}
                    <div className='bg-gray-800 rounded-xl p-4 flex flex-col
                        sm:flex-row items-start sm:items-center justify-between gap-4'>
                        <div className=' flex items-center justify-between gap-4 flex-wrap'>
                            <span className='text-white font-bold'>
                                {suggestions.length}
                            </span>

                            <div className='flex items-center gap-2'>
                                <span className='text-gray-300 text-sm'>
                                    Sort by:
                                </span>

                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
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

                        <Button openModel={openModel}>
                            + Add Feedback
                        </Button>
                    </div>

                    <FeedbackList
                        suggestions={suggestions}
                        filterCategory={filterCategory}
                        sortBy={sortBy}
                        onUpvote={handleUpvotes}
                        onView={handleView}
                    />
                </div>
            </div>

            {isAddRoute && (
                <FeedbackModal
                    onClose={closeModel}
                    onAdd={handleAdd}
                />
            )}

        </div>
    )
}

export default HomePage

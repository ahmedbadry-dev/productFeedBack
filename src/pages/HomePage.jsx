import { use, useMemo, useState } from 'react'
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

    //Redux Data
    const { suggestions, comments } = useSelector(state => state.feedback)

    // UI local data
    const [filterCategory, setFilterCategory] = useState("All")
    const [sortBy, setSortBy] = useState("most-up-votes")

    // if the current URL is /add the modelOpen = true
    const modelOpen = location.pathname === '/add'

    //derived counts from roadmap cards
    const roadmapCounts = useMemo(() => ({
        planned: suggestions.filter(s => s.status === 'Planned').length,
        inProgress: suggestions.filter(s => s.status === 'In-Progress').length,
        live: suggestions.filter(s => s.status === 'Live').length
    }), [suggestions])

    // handles 
    const openModel = () => navigate('/add')
    const closeModel = () => navigate(-1) // gp back to previous route

    const handleAdd = (payload) => {
        dispatch(addSuggestion(payload))
        closeModel();
    }

    const handleUpvotes = (id) => {
        dispatch(toggleUpvote({ id }))
    }

    const handleView = (item) => {
        navigate(`feedback/${item.id}`)
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <Sidebar
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                    roadmapCounts={roadmapCounts}
                    openRoadmap={() => navigate('roadmap')}
                    openModel={openModel}
                />

                <div className='lg:col-span-3 space-y-6'>
                    {/*Header*/}
                    <div className='bg-gray-800 rounded-xl p-4 flex flex-col
                        sm:flex-row items-start sm:items-center justify-between gap-4'>
                        <div className='flex items-center gap-4 flex-wrap'>
                            <span className='text-white font-bold'>{suggestions.length}</span>
                            <div className='flex items-center gap-2'>
                                <span className='text-gray-300 text-sm'>Sort by:</span>
                                <select
                                    name="sortSuggestion"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.currentTarget.value)}
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
            <FeedbackModal
                isOpen={modelOpen}
                onClose={closeModel}
                onAdd={handleAdd}
                editingFeedback={null}
            />
        </div>
    )
}

export default HomePage
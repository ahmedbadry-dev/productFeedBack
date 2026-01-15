import { useDispatch, useSelector } from 'react-redux'
import RoadmapView from '../components/RoadmapView'
import { replace, useNavigate } from 'react-router-dom'
import { toggleUpvote } from '../feature/feedbackSlice'

const RoadmapPage = () => {

    const suggestions = useSelector(s => s.feedback.suggestions)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpvote = (id) => dispatch(toggleUpvote({ id }))
    const handleView = (item) => navigate(`/feedback/${item.id}`, { replace: true })
    const openAdd = () => navigate(`/add`, { replace: true })
    const onBack = () => navigate('/', { replace: true })

    return (
        <div className='max-w-6xl mx-auto'>
            <RoadmapView
                suggestions={suggestions}
                onUpvote={handleUpvote}
                onView={handleView}
                openAdd={openAdd}
                onBack={onBack}
            />
        </div>
    )
}

export default RoadmapPage
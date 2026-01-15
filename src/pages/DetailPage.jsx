import React, { useMemo } from 'react'
import DetailView from '../components/DetailView'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    addComments,
    toggleUpvote,
    updateSuggestion
} from '../feature/feedbackSlice'
import FeedbackModal from '../components/FeedbackModal'

const DetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const { suggestions, comments } = useSelector(state => state.feedback)

    const feedback = useMemo(
        () => suggestions.find(s => s.id === id),
        [suggestions, id]
    )

    // ✅ protect route after delete / invalid id
    if (!feedback) {
        return <Navigate to="/" replace />
    }

    const isEditRoute = location.pathname.endsWith('/edit')

    const handleUpvote = (id) => {
        dispatch(toggleUpvote(id))
    }

    const handleAddComments = (id, comment) => {
        dispatch(addComments({ suggestionId: id, comment }))
    }

    const handleUpdate = (payload) => {
        dispatch(updateSuggestion(payload))
        navigate(`/feedback/${id}`, { replace: true })
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <DetailView
                feedback={feedback}
                comments={comments[feedback.id] || []}
                onBack={() => navigate('/', { replace: true })}
                onUpvote={handleUpvote}
                onOpenEdit={() => navigate(`/feedback/${feedback.id}/edit`)}
                onAddComment={handleAddComments}
            />

            {isEditRoute && (
                <FeedbackModal
                    editingFeedback={feedback}
                    onUpdate={handleUpdate}
                    onClose={() => navigate(`/feedback/${id}`, { replace: true })}
                />
            )}
        </div>
    )
}

export default DetailPage

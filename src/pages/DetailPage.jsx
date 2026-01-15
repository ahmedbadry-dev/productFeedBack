import React, { useMemo } from 'react'
import DetailView from '../components/DetailView'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    addComments,
    deleteSuggestion,
    toggleUpvote,
    updateSuggestion
} from '../feature/feedbackSlice'
import FeedbackModal from '../components/FeedbackModal'

const DetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const { suggestions, comments } = useSelector(
        state => state.feedback
    )

    // 🔹 memoized selector
    const feedback = useMemo(
        () => suggestions.find(s => s.id === id),
        [suggestions, id]
    )

    // 🔒 protect route (invalid id / deleted feedback)
    if (!feedback) {
        return <Navigate to="/" replace />
    }

    // 🔹 modal controlled by route only
    const isEditRoute = location.pathname.endsWith('/edit')

    // handlers
    const handleUpvote = () => {
        dispatch(toggleUpvote({ id: feedback.id }))
    }

    const handleAddComments = (comment) => {
        dispatch(addComments({ suggestionId: feedback.id, comment }))
    }

    const handleUpdate = (payload) => {
        dispatch(updateSuggestion(payload))
        navigate(`/feedback/${feedback.id}`, { replace: true })
    }

    const handleCloseModal = () => {
        navigate(`/feedback/${feedback.id}`, { replace: true })
    }

    const handleDelete = (id) => {
        dispatch(deleteSuggestion({ id }))
        navigate(`/`, { replace: true })
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
                    onClose={handleCloseModal}
                    onDelete={handleDelete}
                />
            )}



        </div>
    )
}

export default DetailPage

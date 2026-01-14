import { createSlice } from "@reduxjs/toolkit";
import { initialSuggestions, initialComments } from '../data/data'

const initialState = {
    suggestions: initialSuggestions,
    comments: initialComments
}

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        addSuggestion: (state, action) => {
            state.suggestions.push(action.payload)
        },
        updateSuggestion: (state, action) => {
            const { id } = action.payload
            const idx = state.suggestions.findIndex(s => s.id === id)
            if (idx !== -1) {
                state.suggestions[idx] = {
                    ...state.suggestions[idx],
                    ...action.payload
                }
            }
        },
        deleteSuggestion: (state, action) => {
            const { id } = action.payload
            state.suggestions = state.suggestions.filter(s => s.id !== id);
            delete state.comments[id]
        },
        toggleUpvote: (state, action) => {
            const { id } = action.payload
            const suggestion = state.suggestions.find(s => s.id === id)

            if (suggestion) {
                suggestion.upvoted = !suggestion.upvoted
                suggestion.upvotes = suggestion.upvoted ?
                    suggestion.upvotes + 1 :
                    Math.max(0, suggestion.upvotes - 1)
            }
        },
        addComments: (state, action) => {
            const { suggestionId, comment } = action.payload
            if (!state.comments[suggestionId]) state.comments[suggestionId] = []
            state.comments[suggestionId].push(comment)

            const suggestion = state.suggestions.find(s => s.id === suggestionId)
            if (suggestion) suggestion.comments = (suggestion.comments || 0) + 1
        },
        replaceAll: (state, action) => {
            return action.payload
        }
    }
})


export const {
    addComments,
    addSuggestion,
    deleteSuggestion,
    replaceAll,
    toggleUpvote,
    updateSuggestion
} = feedbackSlice.actions
export default feedbackSlice.reducer
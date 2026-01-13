import React from 'react'

const Button = ({ children, width }) => {
    return (
        <button
            className={`${width} bg-purple-600 hover:bg-purple-700 text-white px-4 py-2
            rounded-lg font-semibold text-sm transition-all whitespace-normal`}
        >{children}</button>
    )
}

export default Button
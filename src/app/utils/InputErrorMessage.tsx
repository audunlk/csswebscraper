import React from 'react'

export const inputErrorMessage = () => {
    return (
        <p className="text-center absolute -bottom-0 mb-8 text-sm text-red-500">
         Please enter a valid URL (including http:// or https://)
        </p>
    )
}
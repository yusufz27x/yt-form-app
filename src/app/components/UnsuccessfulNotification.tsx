import React from 'react'

const UnsuccessfulNotification = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 px-4 py-2 bg-red-500 text-white text-center rounded shadow-lg z-50">
       <span className="block">✖ Form gönderilemedi.</span>
    </div>
  )
}

export default UnsuccessfulNotification

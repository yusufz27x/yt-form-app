import React, { useState } from 'react'

const FullName = () => {
  const [fullName, setFullName] = useState('')
  const [fullNameErrorMessage, setFullNameErrorMessage] = useState('')

  const handleFullNameChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setFullName(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const words = fullName.trim().split(/\s+/)
    if (words.length < 2) {
      setFullNameErrorMessage('Please enter your full name (at least two words).')
    } else {
      console.log('Name submitted:', fullName)
    }
  }

  return (
    <div className='flex justify-center items-center bg-slate-300 rounded-3xl my-2 p-6'>
      <div className='w-full max-w-lg'>
        <form onSubmit={handleSubmit}>
          <div className='mb-1'>
            <label htmlFor='fullName' className='text-slate-600'>
              Full Name:
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='Enter your full name'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black'
              value={fullName}
              onChange={handleFullNameChange}
            />
            {fullNameErrorMessage && <div style={{ color: 'red' }}>{fullNameErrorMessage}</div>}
          </div>
          <button type='submit' className='bg-orange-400 rounded-md px-2 py-1 justify-center '>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default FullName
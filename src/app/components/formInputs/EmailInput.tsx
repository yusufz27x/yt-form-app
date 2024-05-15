import React, { useState } from 'react'

const EmailInput = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!email.trim()) {
    } else console.log('Email submitted:', email)
  }

  return (
    <div className='flex justify-center items-center bg-slate-300 rounded-3xl my-2 p-6'>
      <div className='w-full max-w-lg'>
        <form onSubmit={handleSubmit}>
          <div className='mb-1'>
            <label htmlFor='email' className='text-slate-600'>
              Email:
            </label>
            <input
              id='email'
              type='email'
              placeholder='example: info@iyteyazilim.com'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type='submit' className='bg-orange-400 rounded-md px-2 py-1 justify-center '>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EmailInput

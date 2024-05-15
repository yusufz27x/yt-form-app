import React, { useState } from 'react'

const ShortAnswerInput = ({ question }) => {
  const [answer, setAnswer] = useState('')
  const [shortAnswerErrorMessage, setShortAnswerErrorMessage] = useState('')

  const handleShortAnswerChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = () => {
    if (!answer.trim()) {
      setShortAnswerErrorMessage('Please enter an answer or "-" for blank.')
    } else if (answer.length > 100) {
      setShortAnswerErrorMessage('Please enter a short answer (<100 char).')
    } else {
      console.log('Short answer submitted:', answer)
    }
  }

  return (
    <div className='flex justify-center items-center bg-slate-300 rounded-3xl my-2 p-6'>
      <div className='w-full max-w-lg'>
        <form onSubmit={handleSubmit}>
          <div className='mb-1'>
            <label htmlFor='shortAnswer' className='text-slate-600'>
              {question}
            </label>
            <textarea
              id='shortAnswer'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black'
              value={answer}
              onChange={handleShortAnswerChange}
            />
            {shortAnswerErrorMessage && <div style={{ color: 'red' }}>{shortAnswerErrorMessage}</div>}
          </div>
          <button type='submit' className='bg-orange-400 rounded-md px-2 py-1 justify-center '>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ShortAnswerInput

import React, { useState } from 'react'

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('')

  const handlePhoneNumberChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPhoneNumber(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (phoneNumber.trim()) {
      console.log('Phone Number submitted:', phoneNumber)
    }
  }

  return (
    <div className='flex justify-center items-center bg-slate-300 rounded-3xl my-2 p-6'>
      <div className='w-full max-w-lg'>
        <form onSubmit={handleSubmit}>
          <div className='mb-1'>
            <label htmlFor='phone' className='text-slate-600'>
              Phone Number:
            </label>
            <input
              id='phone'
              type='tel'
              pattern='0[0-9]{3} [0-9]{3} [0-9]{4}'
              placeholder='05XX XXX XXXX'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black'
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {phoneNumberErrorMessage && <div style={{ color: 'red' }}>{phoneNumberErrorMessage}</div>}
          </div>
          <button type='submit' className='bg-orange-400 rounded-md px-2 py-1 justify-center '>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default PhoneNumberInput
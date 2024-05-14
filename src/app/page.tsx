'use client'
import React, { useState } from 'react'
import EmailInput from './components/formInputs/EmailInput'
import FullName from './components/formInputs/FullName'
import PhoneNumberInput from './components/formInputs/PhoneNumberInput'
import ShortAnswerInput from './components/formInputs/ShortAnswerInput'

export default function Home() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('Form Submitted!')
  }

  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='w-1/3 p-4 bg-white rounded-3xl justify-center items-center'>
        <div className='text-5xl text-center text-orange-400 font-extrabold mb-2'>Testing</div>
        <FullName />
        <EmailInput />
        <PhoneNumberInput />
        <ShortAnswerInput question={'Is it ok?'} />
      </div>
    </main>
  )
}

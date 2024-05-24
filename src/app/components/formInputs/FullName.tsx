import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FullName = () => {
  const [fullName, setFullName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setFullName(e.target.value)
    setErrorMessage('') // Clear the error message when user starts typing
  }

  const handleBlur = () => {
    const words = fullName.trim().split(/\s+/)
    if (words.length < 2) {
      setErrorMessage('Please enter your full name (at least two words).')
    } else {
      console.log('Name submitted:', fullName)
      setErrorMessage('') // Clear any previous error messages
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        component='form'
        sx={{ '& .MuiTextField-root': { m: 1, width: "flex" } }}
        noValidate
        autoComplete='off'
      >
        <TextField
          error={Boolean(errorMessage)}
          helperText={errorMessage}
          label={"Full Name"}
          placeholder={"John Doe"}
          id='outlined-error-helper-text'
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Box>
    </div>
  );
}

export default FullName

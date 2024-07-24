import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputProps } from '@/models/Application'


const EmailInput: React.FC<InputProps> = ({ updateFormAnswer }) => {
	const [email, setEmail] = useState('')
	// const [answerIndex, setAnswerIndex] = useState(-1);
	var answerIndex = -1;
	const [errorMessage, setErrorMessage] = useState('')

	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setEmail(e.target.value)
		setErrorMessage('') // Clear the error message when user starts typing
	}

	const handleBlur = () => {
		if (!email.trim()) {
			setErrorMessage('Email cannot be empty')
		} else if (!validateEmail(email)) {
			setErrorMessage('Please enter a valid email')
		} else {
			console.log('Email submitted:', email)
			setErrorMessage('') // Clear any previous error messages
			console.log('Answer index email:', answerIndex);
			if (answerIndex === -1) {
				// console.log(updateFormAnswer(email, 1));
				 answerIndex = (updateFormAnswer(email, 1));
			}
			else {
				updateFormAnswer(email, 1, answerIndex);
			}
			console.log('Answer index:', answerIndex);
		}
	}

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Box
				component='form'
				sx={{ '& .MuiTextField-root': { m: 1, width: 'flex' } }}
				noValidate
				autoComplete='off'
			>
				<TextField
					error={Boolean(errorMessage)}
					helperText={errorMessage}
					label={"E-mail"}
					placeholder={"info@yazilim.com"}
					id='outlined-error-helper-text'
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</Box>
		</div>
	);
}

export default EmailInput
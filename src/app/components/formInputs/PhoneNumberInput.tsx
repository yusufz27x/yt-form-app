import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputProps } from '@/models/Application'
// import MuiPhoneNumber from 'mui-phone-number';

const PhoneNumberInput: React.FC<InputProps> = ({ updateFormAnswer }) => {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [answerIndex, setAnswerIndex] = useState(-1);
	const [errorMessage, setErrorMessage] = useState('')

	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setPhoneNumber(e.target.value)
		setErrorMessage('') // Clear the error message when user starts typing
	}

	const handleBlur = () => {
		if (!phoneNumber.trim()) {
			setErrorMessage('Phone number cannot be empty')
		} else if (!validatePhoneNumber(phoneNumber)) {
			setErrorMessage('Please enter a valid phone number in the format 05xxAAAxxxx')
		} else {
			console.log('Phone Number submitted:', phoneNumber)
			setErrorMessage('') // Clear any previous error messages
			if (answerIndex == -1) {
				setAnswerIndex(updateFormAnswer(phoneNumber, 3));
			}
			else {
				updateFormAnswer(phoneNumber, 3, answerIndex);
			}
		}
	}

	const validatePhoneNumber = (phone: string) => {
		const phoneRegex = /^0\d{3}\s*\d{3}\s*\d{4}$/
		return phoneRegex.test(phone)
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
					label={"Phone Number"}
					placeholder={"0 5xx xxx xxxx"}
					id='outlined-error-helper-text'
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</Box>
		</div>
	);
}

export default PhoneNumberInput

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputProps } from '@/models/Application'

const LongAnswerInput: React.FC<InputProps> = ({ updateFormAnswer }) => {
	const [answer, setAnswer] = useState('');
	const [answerIndex, setAnswerIndex] = useState(-1);
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setAnswer(e.target.value);
		setErrorMessage(''); // Clear the error message when user starts typing
	};

	const handleBlur = () => {
		if (!answer.trim()) {
			setErrorMessage('Please enter an answer or "-" for blank.');
		} else if (answer.length > 500) {
			setErrorMessage('Please enter a long answer (<500 char).');
		} else {
			console.log('Long answer submitted:', answer);
			setErrorMessage(''); // Clear any previous error messages
			if (answerIndex == -1) {
				setAnswerIndex(updateFormAnswer(answer, 4));
			}
			else {
				updateFormAnswer(answer, 4, answerIndex);
			}
		}
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Box
				component='form'
				sx={{ '& .MuiTextField-root': { m: 1, width: "35ch" } }}
				noValidate
				autoComplete='off'
			>
				<TextField
					error={Boolean(errorMessage)}
					helperText={errorMessage}
					id='outlined-error-helper-text'
					multiline
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</Box>
		</div>
	);
};

export default LongAnswerInput;

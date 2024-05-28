import React, { useState, ChangeEvent } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface ShortAnswerInputProps {
	updateFormAnswer: (answer: string, type: number) => void;
}

const ShortAnswerInput: React.FC<ShortAnswerInputProps> = ({ updateFormAnswer }) => {
	const [answer, setAnswer] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		let input = e.target.value;
		if (input.length <= 100) {

			setAnswer(input);
			setErrorMessage('');
			updateFormAnswer(answer, 0);
		} else {
			setAnswer(input.substring(0, 100)); // Truncate input to 100 characters
			setErrorMessage('Maximum character limit reached');
		}
	}

	const handleBlur = () => {
		if (!answer.trim()) {
			setErrorMessage('Please enter an answer or "-" for blank.');
		} else {
			console.log('Short answer submitted:', answer);
			setErrorMessage(''); // Clear any previous error messages
		}
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
					id='outlined-error-helper-text'
					multiline
					value={answer}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</Box>
		</div>
	);
}

export default ShortAnswerInput;
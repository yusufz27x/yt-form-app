import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputProps } from '@/models/Application'

const StudentNumberInput: React.FC<InputProps> = ({ updateFormAnswer }) => {
	const [studentNumber, setStudentNumber] = useState('');
	const [answerIndex, setAnswerIndex] = useState(-1);
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setStudentNumber(e.target.value);
		setErrorMessage(''); // Clear the error message when user starts typing
	};

	const handleBlur = (e: { target: { value: React.SetStateAction<string> } }) => {
		// Check if input value is empty
		if (!studentNumber.trim()) {
			setErrorMessage('Bu alan boş bırakılamaz.');
		} else {
			setErrorMessage('');
			// Öğrenci numarası kontrolü yapılabilir
			if (!/^\d{9}$/.test(studentNumber) && !/^\d{6}\d{3}[Yy]$/.test(studentNumber)) {
				setErrorMessage(
					'Öğrenci numarası 9 haneli veya 290290290Y formatında olmalıdır.'
				);
			} else {
				setErrorMessage('');
				if (answerIndex == -1) {
					setAnswerIndex(updateFormAnswer(studentNumber, 7));
				}
				else {
					updateFormAnswer(studentNumber, 7, answerIndex);
				}
			}
		}


	};

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
					label={"Student Number"}
					placeholder={"230123456"}
					id='outlined-error-helper-text'
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</Box>
		</div>
	);
};

export default StudentNumberInput;

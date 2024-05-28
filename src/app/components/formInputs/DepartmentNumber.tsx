import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { InputProps } from '@/models/Application'


const DepartmentInput: React.FC<InputProps> = ({ updateFormAnswer }) => {
	const [department, setDepartment] = useState('');
	const [answerIndex, setAnswerIndex] = useState(-1);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const departmentList = [
		"Fizik",
		"Fotonik",
		"Kimya",
		"Matematik",
		"Moleküler Biyoloji ve Genetik",
		"Bilgisayar Mühendisliği",
		"Biyomühendislik",
		"Çevre Mühendisliği",
		"Enerji Sistemleri Mühendisliği",
		"Elektronik ve Haberleşme Mühendisliği",
		"Gıda Mühendisliği",
		"İnşaat Mühendisliği",
		"Kimya Mühendisliği",
		"Makina Mühendisliği",
		"Malzeme Bilimi ve Mühendisliği",
		"Endüstriyel Tasarım",
		"Mimarlık",
		"Şehir ve Bölge Planlama",
	];

	const handleChange = (e: SelectChangeEvent<string>) => {
		setDepartment(e.target.value);
		setErrorMessage(''); // Clear the error message when user starts typing
		if (answerIndex == -1) {
			setAnswerIndex(updateFormAnswer(department, 6));
		}
		else {
			updateFormAnswer(department, 6, answerIndex);
		}
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<FormControl>
				<Select
					labelId="department-label"
					defaultValue="Seçiniz"
					id="department-select"
					onChange={handleChange}
				>
					<MenuItem value="Seçiniz">
						<em>Seçiniz</em>
					</MenuItem>
					{departmentList.map((department: string) => (
						<MenuItem key={department} value={department}>
							{department}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			{errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
		</div>
	);
};

export default DepartmentInput;

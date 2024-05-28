import * as React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface Props {
	label: string;
	options: string[];
	updateFormAnswer: (answer: string, type: number, index?: number) => number;
}

const MultipleChoiceInput: React.FC<Props> = ({ label, options, updateFormAnswer }) => {
	const [value, setValue] = React.useState<string>("");
	const [answerIndex, setAnswerIndex] = useState(-1);

	const handleClick = (selectedValue: string) => {
		setValue(selectedValue);
		if (answerIndex == -1) {
			setAnswerIndex(updateFormAnswer(value, 5));
		}
		else {
			updateFormAnswer(value, 5, answerIndex);
		}
	};

	return (
		<div>
			<FormControl component="fieldset">
				<FormLabel component="legend">{label}</FormLabel>
				{options.map((option: string) => (
					<FormControlLabel
						key={option}
						value={option}
						control={<Radio />}
						label={option}
						checked={value === option}
						onChange={() => handleClick(option)}
					/>
				))}
			</FormControl>
		</div>
	);
};

export default MultipleChoiceInput;

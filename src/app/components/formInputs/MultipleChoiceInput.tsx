import * as React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface Props {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const MultipleChoiceInput: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const handleClick = (selectedValue: string) => {
    onChange(selectedValue);
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

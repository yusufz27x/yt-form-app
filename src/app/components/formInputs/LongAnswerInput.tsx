import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// LongAnswerInput component
interface LongAnswerInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const LongAnswerInput: React.FC<LongAnswerInputProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    // Check if input value is empty
    if (inputValue.trim() === "") {
      setErrorMessage("Bu alan boş bırakılamaz.");
    } else {
      setErrorMessage("");
    }

    // Check length of input value
    if (inputValue.length > 10) {
      setErrorMessage("Metin 10 karakterden uzun olamaz.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TextField
        required
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        id={name}
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        multiline
        rows={3}
        variant="outlined"
      />
    </div>
  );
};

const MyForm: React.FC = () => {
  const [longAnswer, setLongAnswer] = React.useState<string>("");

  const handleLongAnswerChange = (value: string) => {
    setLongAnswer(value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "flex",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {/* LongAnswerInput component */}
        <LongAnswerInput
          label="Uzun Metin Girişi"
          name="longAnswer"
          value={longAnswer}
          onChange={handleLongAnswerChange}
        />
      </div>
    </Box>
  );
};

export default LongAnswerInput;

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const StudentNumberInput: React.FC<Props> = ({ label, value, onChange }) => {
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    // Check if input value is empty
    if (inputValue.trim() === "") {
      setErrorMessage("Bu alan boş bırakılamaz.");
    } else {
      setErrorMessage("");
    }

    // Öğrenci numarası kontrolü yapılabilir
    if (!/^\d{9}$/.test(inputValue) && !/^\d{6}\d{3}[Yy]$/.test(inputValue)) {
      setErrorMessage(
        "Öğrenci numarası 9 haneli veya 290290290Y formatında olmalıdır."
      );
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "flex" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          error={Boolean(errorMessage)}
          helperText={errorMessage}
          id="outlined-error-helper-text"
          label={label}
          defaultValue={value}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};

export default StudentNumberInput;

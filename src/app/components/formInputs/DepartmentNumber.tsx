import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DepartmentInput: React.FC<Props> = ({ label, value, onChange }) => {
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

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);

    // Perform any validation and set error message accordingly
    if (!selectedValue) {
      setErrorMessage("Lütfen bir bölüm seçiniz.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="department-label">{label}</InputLabel>
        <Select
          labelId="department-label"
          id="department-select"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="">
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

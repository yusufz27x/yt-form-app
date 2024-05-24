import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const DepartmentInput = () => {
  const [department, setDepartment] = useState('');
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
  };

  return (
    <div>
      <FormControl fullWidth>
        <Select
          labelId="department-label"
          id="department-select"
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

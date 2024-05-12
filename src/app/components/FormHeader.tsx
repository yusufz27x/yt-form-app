import React, { useState, useEffect } from "react";
import Logo from "./Logo_3D/Logo";
import { formData } from "../mock_data"; 

const FormHeader = () => {
  const [formTitle, setFormTitle] = useState(""); 
  const [formDescription, setFormDescription] = useState(""); 

  useEffect(() => {
    const firstData = formData[0];

    setFormTitle(firstData.name);
    setFormDescription(firstData.description);
  }, []); 

  return (
    <div className="mt-12 ">
      <Logo />
      <h1 className="text-center mt-2 text-[#f0d1b8] text-xl font-bold">{formTitle}</h1>
      <p className="text-center text-[#f0d1b8]">{formDescription}</p>
    </div>
  );
};

export default FormHeader;
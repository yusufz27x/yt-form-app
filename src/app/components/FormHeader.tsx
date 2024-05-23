import React, { useState, useEffect } from "react";
import Logo from "./Logo_3D/Logo";
import { usePathname } from 'next/navigation';
import { ApiForm } from "@/models/Form";

const FormHeader = () => {

	const [form, setForm] = useState<ApiForm | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		const getForm = async () => {

			try {
				const result = await fetch(`http://localhost:3000/api/form/${pathname.split("/").pop()}`, { cache: "no-store" });

				if (!result.ok) {
					throw new Error('Failed to fetch form');
				}

				const data = await result.json();
				setForm(data.form);
			} catch (error) {
				console.log("Error loading form", error);
			}
		};
		if (pathname) {
			getForm();
		}
	}, [pathname]);

	return (
		<div className="mt-12" style={{paddingTop: '2vh'}}>
			<Logo />
			{form ? (
				<>
					<h1 className="text-center mt-2 text-[#f0d1b8] text-xl font-bold">{form.name}</h1>
					<p className="text-center text-[#f0d1b8]">{form.description}</p>
				</>
			) : (
				<p className="text-center text-[#f0d1b8]">Loading...</p>
			)}
		</div>
	);
};

export default FormHeader;
'use client'

import FormHeader from '@/app/components/FormHeader';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import SuccessNotification from '@/app/components/SuccessNotification';
import UnsuccessfulNotification from '@/app/components/UnsuccessfulNotification';

export default function Form() {

	const [form, setForm] = useState(null);
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
		getForm();
	}, []);

	return (
		<div className='mx-4'>
			<FormHeader />
			<div>
				{/* {form} */}
			</div>
			{/* TODO: submit button with update API */}
			{/* <button
				type="submit"
				className="py-3 px-6 w-fit"
			>
				Submit
			</button> */}
			<SuccessNotification />
			<UnsuccessfulNotification />
		</div>
	);
}
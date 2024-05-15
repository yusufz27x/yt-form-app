'use client'

import FormHeader from '@/app/components/FormHeader';
import React from 'react'
import { usePathname } from 'next/navigation';
import SuccessNotification from '@/app/components/SuccessNotification';
import UnsuccessfulNotification from '@/app/components/UnsuccessfulNotification';

const getForm = async () => {
	
	try {
		const pathname = usePathname();
		console.log(usePathname());
		const result = await fetch(`http://localhost:3000/api/form/${pathname.split("/").pop()}`, { cache: "no-store" });

		if (!result.ok) {
			throw new Error('Failed to fetch form');
		}

		return result.json();
	} catch (error) { console.log("Error loading form", error); }
}

export default async function Form() {
	const test = await getForm();

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
			<SuccessNotification/>
			<UnsuccessfulNotification/>
		</div>
	);
}
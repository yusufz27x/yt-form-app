'use client'

import FormHeader from '@/app/components/FormHeader';
import React from 'react'
import { useRouter } from 'next/router'

const getForm = async () => {
	const router = useRouter();

	try {
		const result = await fetch("http://localhost:3000/api/form/${router.query.formId}", { cache: "no-store" });

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
			<button
				type="submit"
				className="py-3 px-6 w-fit"
			>
				Submit
			</button>
		</div>
	);
}
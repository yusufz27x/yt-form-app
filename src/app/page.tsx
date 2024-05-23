'use client'

import React, { useEffect, useState } from 'react'
import { ApiForm } from "../models/Form"
import Link from 'next/link'

export default function Home() {

	const [forms, setForms] = useState([]);

	useEffect(() => {
		const fetchForms = async () => {
			try {
				const result = await fetch("http://localhost:3000/api/form", { cache: "no-store" });

				if (!result.ok) {
					throw new Error('Failed to fetch forms');
				}

				const data = await result.json();
				setForms(data.forms);
			} catch (error) {
				console.error("Error loading forms", error);
			}
		};
		fetchForms();
	}, []);

	/* const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log('Form Submitted!')
	} */

	return (
		<main className="flex justify-center items-start h-screen" style={{ paddingTop: '10vh' }}>
			<div className='w-1/3 p-4 bg-white rounded-3xl justify-center items-center'>
				{forms.map((form: ApiForm) => (
					<Link key={form._id.$oid} href={`/form/${form._id}`} className='my-10 rounded-lg bg-gray-100 p-4 flex items-center justify-between'>

						<div></div>

						<div>
							<div className='text-5xl text-center text-orange-400 font-extrabold mb-2'>{form.name}</div>
							<div className='text-3xl text-center text-orange-400 font-light mb-2'>{form.description}</div>
						</div>

						<div className='ml-4'>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</div>
						
					</Link>
				))}
			</div>
		</main>
	);
}
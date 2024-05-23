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

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log('Form Submitted!')
	}

	return (
		<main className="flex justify-center items-start h-screen" style={{ paddingTop: '10vh' }}>
			<div className='w-1/3 p-4 bg-white rounded-3xl justify-center items-center'>
				{forms.map((form: ApiForm) => (
					<div className='my-10'>
						<Link href={`/form/${form._id}`}>
							<div className='text-5xl text-center text-orange-400 font-extrabold mb-2'>{form.name}</div>
						</Link>
						<div className='text-3xl text-center text-orange-400 font-light mb-2'>{form.description}</div>
					</div>
				))}
			</div>
		</main>
	);
}
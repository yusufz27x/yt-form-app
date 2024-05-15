'use client'

import React from 'react'
import { ApiForm } from "../models/Form"
import Link from 'next/link'

const getForms = async () => {

	try {
		const result = await fetch("http://localhost:3000/api/form", { cache: "no-store", });

		if (!result.ok) {
			throw new Error('Failed to fetch forms');
		}

		return result.json();
	} catch (error) { console.log("Error loading forms", error); }
}

export default async function Home() {

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log('Form Submitted!')
	}

	const { forms } = await getForms();

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
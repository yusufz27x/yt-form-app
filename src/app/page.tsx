'use client'

import React, { useEffect, useState } from 'react'
import { ApiForm } from "../models/Form"
import Link from 'next/link'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
					<Button
					variant='contained'
					key={form._id.$oid}
					href={`/form/${form._id}`}
					endIcon={<ArrowForwardIcon />}
				>				
					<div className='rounded-3xl justify-center items-center'>
						<div> {form.name}</div>
						<div> {form.description}</div>
					</div>
				</Button>
				))}
			</div>
		</main>
	);
}
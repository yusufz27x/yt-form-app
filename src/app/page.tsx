'use client'

import React, { useEffect, useState } from 'react'
import { ApiForm } from "../models/Form"
import Link from 'next/link'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { deepOrange, orange } from '@mui/material/colors';

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
		<main className="flex justify-center items-start" style={{ paddingTop: '10vh' }}>
			<div className='w-1/4 p-4 bg-white rounded-3xl justify-center items-center'>
				<Stack spacing={2} divider={<Divider flexItem />}>
					{forms.map((form: ApiForm) => (
						<Button
							variant='contained'
							key={form._id.$oid}
							href={`/form/${form._id}`}
							endIcon={<ArrowForwardIcon />}
							sx={{
								bgcolor: deepOrange[400],
								color: 'white',
								'&:hover': {
									bgcolor: orange[400],
								},
							}}
						>
							<div className='rounded-3xl justify-center items-center'>
								<div className='text-xl font-bold'> {form.name}</div>
								<div className='normal-case'> {form.description}</div>
							</div>
						</Button>
					))}
				</Stack>
			</div>
		</main>
	);
}
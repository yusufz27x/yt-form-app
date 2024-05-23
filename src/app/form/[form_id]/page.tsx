'use client'

import FormHeader from '@/app/components/FormHeader';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import SuccessNotification from '@/app/components/SuccessNotification';
import UnsuccessfulNotification from '@/app/components/UnsuccessfulNotification';
import { ApiForm, ApiQuestion } from '@/models/Form';
import ShortAnswerInput from '@/app/components/formInputs/ShortAnswerInput';
import EmailInput from '@/app/components/formInputs/EmailInput';
import FullName from '@/app/components/formInputs/FullName';
import PhoneNumberInput from '@/app/components/formInputs/PhoneNumberInput';
import LongAnswerInput from '@/app/components/formInputs/LongAnswerInput';
import MultipleChoiceInput from '@/app/components/formInputs/MultipleChoiceInput';
import DepartmentInput from '@/app/components/formInputs/DepartmentNumber';
import StudentNumberInput from '@/app/components/formInputs/StudentNumber';

export default function Form() {

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
		getForm();
	}, [pathname]);

	return (
		<div className='mx-4'>
			<div className='m-4'>
				<FormHeader />
			</div>
			{form ? (
				<div>
					{form.questions.map((question: ApiQuestion) => (
						<div className='flex justify-center'>
							<div className="bg-gray-100 w-1/3 rounded-3xl p-4 m-3 items-center">
								<p>{question.question}</p>
								{(() => {
									switch (question.type) {
										case 0:
											return <p>Error displaying question 0.</p>
											return <ShortAnswerInput />
											break;
										case 1:
											return <EmailInput />
											break;
										case 2:
											return <FullName />
											break;
										case 3:
											return <PhoneNumberInput />
											break;
										case 4:
											return <p>Error displaying question 4.</p>
											return <LongAnswerInput />
											break;
										case 5:
											return <p>Error displaying question 5.</p>
											return <MultipleChoiceInput></MultipleChoiceInput>
											break;
										case 6:
											return <p>Error displaying question 6.</p>
											return <DepartmentInput />
											break;
										case 7:
											return <p>Error displaying question 7.</p>
											return <StudentNumberInput />
										default:
											return <p>Error displaying question.</p>
									}
								})()}
							</div>
						</div>
					))}
				</div>
			) : (
				<p className="text-center text-[#f0d1b8]">Loading...</p>
			)}


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
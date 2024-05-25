'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

import FormHeader from '@/app/components/FormHeader';
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
								<p className="text-center mb-4">{question.question}</p>
								{(() => {
									switch (question.type) {
										case 0:
											return <ShortAnswerInput />
										case 1:
											return <EmailInput />
										case 2:
											return <FullName />
										case 3:
											return <PhoneNumberInput />
										case 4:
											return <LongAnswerInput />
										case 5:
											return <p>Error displaying question.</p>
											return <MultipleChoiceInput label={question.question} options={question.options} value={"question.value"} onChange={handleOptionChange} />;
										case 6:
											return <DepartmentInput />
										case 7:
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
			{/* <SuccessNotification /> */}
			{/* <UnsuccessfulNotification /> */}
		</div>
	);
}
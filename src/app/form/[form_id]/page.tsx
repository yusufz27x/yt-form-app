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
import { ApiAnswer, ApiApplication } from '@/models/Application';
import applicationSchema from '@/models/Application';
import { v4 as uuidv4 } from 'uuid';


export default function Form() {

	const [form, setForm] = useState<ApiForm | null>(null);
	const [application, setApplication] = useState<ApiApplication | null>(null);
	const [answers, setAnswers] = useState<ApiAnswer[]>([]);
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

	const updateFormAnswer = (answer: string, type: number, index?: number) => {
		const updatedAnswer: ApiAnswer = {
			type: type,
			answer: answer,
		};

		if (index !== undefined && index >= 0 && index < answers.length) {
			// Update existing answer at the specified index
			setAnswers(answers => {
				const updatedAnswers = [...answers];
				updatedAnswers[index] = updatedAnswer;
				return updatedAnswers;
			});
		} else {
			// Add a new answer if no index to update is provided
			setAnswers(answers => [...answers, updatedAnswer]);
		}
		return answers.length - 1;
	};

	const handleSubmit = async () => {
		try {

			const applicationData: ApiApplication = {

				_id: uuidv4(),
				form_id: `${pathname.split("/").pop()}`,
				answers: answers,

			}

			console.log(answers);

			setApplication(applicationData);

			const response = await fetch('http://localhost:3000/api/application', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form), // Assuming form data is stored in the state

			});

			if (response.ok) {
				<SuccessNotification />
				console.log('Form submitted successfully');
			} else {
				<UnsuccessfulNotification />
				console.error('Failed to submit form');
			}
		} catch (error) {
			<UnsuccessfulNotification />
			console.error('Error submitting form', error);
		}
	};

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
											return <ShortAnswerInput updateFormAnswer={updateFormAnswer} />
										case 1:
											return <EmailInput updateFormAnswer={updateFormAnswer} />
										case 2:
											return <FullName updateFormAnswer={updateFormAnswer} />
										case 3:
											return <PhoneNumberInput updateFormAnswer={updateFormAnswer} />
										case 4:
											return <LongAnswerInput updateFormAnswer={updateFormAnswer} />
										case 5:
											return <MultipleChoiceInput label={question.question} options={question.options} updateFormAnswer={updateFormAnswer} />;
										case 6:
											return <DepartmentInput updateFormAnswer={updateFormAnswer} />
										case 7:
											return <StudentNumberInput updateFormAnswer={updateFormAnswer} />
										default:
											return <p>Error displaying question.</p>
									}
								})()}
							</div>


						</div>

					))}
					<div className='text-center p-4' style={{ paddingBottom: '10vh' }}>
						<button
							type="submit"
							className="py-3 px-6 w-fit bg-blue-500 text-white rounded-md mt-4"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</div>
			) : (
				<p className="text-center text-[#f0d1b8]">Loading...</p>
			)}
		</div>
	);
}
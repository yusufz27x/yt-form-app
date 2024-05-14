'use client'

import Footer from "./components/Footer"
import FormHeader from "./components/FormHeader";
import SuccessNotification from "./components/SuccessNotification";
import UnsuccessNotification from "./components/UnsuccessfulNotification";

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
	const { forms } = await getForms();

	// TODO: display forms

	return (
		<main className="">
			<FormHeader />
			{/* {forms.map(form => (<div className="mx-4">
				{form}
			</div>
			))} */}
			{/* < SuccessNotification /> */}
			{/* <UnsuccessNotification /> */}
			<Footer />
		</main>
	);
}
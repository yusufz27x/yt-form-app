import Image from "next/image";

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

	// No API yet
	/* const { forms } = await getForms(); */

	return (
		<main>
			{/* {forms.map(form => (<div className="mx-4">
				{form}
			</div>
			))} */}
		</main>
	);
}
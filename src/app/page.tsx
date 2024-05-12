import Image from "next/image";

const getForms = async () => {
	try {
		const result = await fetch("http://localhost:3000/api/form", { cache: "no-store", });

		if (!result.ok) {
			throw new Error('Failed to fetch forms');
		}

	} catch (error) { console.log("Error loading forms", error); }
}

export default async function Home() {

	const { forms } = await getForms();

	return (
		<main>
			{forms.map(form => (<div className="mx-4">
				{form}
			</div>
			))}
		</main>
	);
}
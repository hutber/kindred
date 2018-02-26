export default function handleErrors(response) {
	if (!response.ok) {
		console.error(response);
		throw Error(response.statusText);
	}
	return response;
}

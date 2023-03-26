const sendFormApi = (data) => {
	const bodyParams = data;
	return fetch("http://localhost:4000/submit", {
		method: "POST",
		body: JSON.stringify(bodyParams),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((dataObj) => {
			console.log("Server response:", dataObj);
		});
};

const objToExport = {
	sendFormApi: sendFormApi,
};

export default objToExport;

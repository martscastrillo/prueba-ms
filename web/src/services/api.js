const sendFormApi = (data) => {
	return fetch("http://localhost:4000/submit", {
		method: "POST",
		body: JSON.stringify(data),
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

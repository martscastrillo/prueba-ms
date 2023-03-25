const sendFormApi = (data) => {
	const bodyParams = data;
  console.log(bodyParams);
  console.log('hola soy');
	return fetch("http://localhost:4000/submit", {
		method: "POST",
		body: JSON.stringify(bodyParams),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((dataObj) => {
			return dataObj;
		});

};

  const objToExport = {
    sendFormApi: sendFormApi,
  };
  
  export default objToExport;
  
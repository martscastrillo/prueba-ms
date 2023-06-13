import "../stylesheets/App.scss";
import { useState } from "react";
const App = () => {
	const [dataArray, setDataArray] = useState([]);
	const [inputValues, setInputValues] = useState({});
  
	const handleChange = (event) => {
	  const { name, value } = event.target;
	  setInputValues(prevInputValues => ({ ...prevInputValues, [name]: value }));
	};
  
	
	console.log(dataArray);
	const handleSubmit = (event) => {
		event.preventDefault();
		const valuesArray = Object.values(inputValues);
		setDataArray(prevDataArray => [...prevDataArray, ...valuesArray]);
	  
		setInputValues({});
	  console.log(dataArray);
	  };
	  const handleReset = (event) => {
		event.preventDefault();
		setDataArray([]);
		setInputValues({});
	  console.log(dataArray);
	  };
	return (
		<div className="superbox">
			<h1 className="superbox__h1">full stack test</h1>
	 <form action="" className="superbox__form" onSubmit={handleSubmit}>
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="value1">value 1</label>
					<input
						id="value1"
						placeholder="value 1"
					
          name="input1"
          value={inputValues.input1|| ''}
          onChange={handleChange}
					/>
				</fieldset>
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="value2">value 2</label>
					<input
						
						id="value2"
						placeholder="value 2"
					
          name="input2"
          value={inputValues.input2|| ''}
          onChange={handleChange}
					/>
				</fieldset>
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="value3">value 3</label>
					<input
						type="text"
							id="value3"
						placeholder="value 3"
					
          name="input3"
          value={inputValues.input3|| ''}
          onChange={handleChange}
					/>
				</fieldset>
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="">value 4</label>
					<input
						type="text"
						placeholder="value 4"
							id="value4"
						
					
          name="input4"
          value={inputValues.input4|| ''}
          onChange={handleChange}
					/>
				</fieldset>
<div className="extradiv">
				<input
					className="superbox__form--submit"
					type="submit"
					value="Submit"
				/>
				<button type="reset" className="superbox__form--submit" onClick={handleReset}>Reset</button></div>
			</form> 
			 
	
			<div className="superbox__results">
				<h2>history results:</h2>
				<h3>resultado</h3>
			</div>
		</div>
	);
};

export default App;

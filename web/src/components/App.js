import "../stylesheets/App.scss";

const App = () => {
	return (
		<div className="superbox">
			<form action="" className="superbox__form">
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="">value 1</label>
					<input type="text" />
				</fieldset>
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="">value 2</label>
					<input type="text" />
				</fieldset>
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="">value 3</label>
					<input type="text" />
				</fieldset>
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="">value 4</label>
					<input type="text" />
				</fieldset>
				<fieldset className="superbox__form--fieldset">
					<label htmlFor="">value 5</label>
					<input type="text" />
				</fieldset>
				<input className="superbox__form--submit" type="submit" value="Submit" />
			</form>
			<div className="superbox__results">
				<h2>history results:</h2>
				<h3>resultado</h3>
			</div>
		</div>
	);
};

export default App;

import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";

const App = () => {

	const [errorNameMessage, seterrorNameMessage] = useState("");
	const [errorMailMessage, seterrorMailMessage] = useState("");
	const [errorPhoneMessage, seterrorPhoneMessage] = useState("");
	const [errorMessageMessage, seterrorMessageMessage] = useState("");
	const [checkbox, setcheckbox] = useState(false);
	const [hidden, setHidden] = useState("hidden");
	const [active, setActive] = useState(false);
	const [burger, setBurger] = useState("burger");
	const [treatment, setTreatment] = useState("Sr.");
	const [dataForm, setDataForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		checkbox: false,
		treatment: "",
	});
	const [validations, setValidations] = useState({
		isInvalidName: false,
		isInvalidMail: false,
		isInvalidPhone: false,
		isInvalidMessage: false,
	});

	const sendFormApi = (data) => {
		apiData.sendFormApi(data).then((response) => {
			if (response) {
				setDataForm(response.dataForm);

				// Si la usuaria introduce bien sus datos redireccionamos desde la página de login al inicio de la página
			} /*else { */
			// Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
			/* setLoginErrorMessage(response.errorMessage);*/
			/*   } */
		});
	};
	const handleBurger = (ev) => {
		ev.preventDefault();
		
		if (active === true) {
			setActive(false);
			setBurger("burger");
		}
		if (active === false) {
			setActive(true);
			setBurger("burger active");
		} 
		}
	const handleInput = (ev) => {
		ev.preventDefault();
		if (ev.target.name === "name") {
			if (ev.target.value.length > 3) {
				console.log("name si");
				setValidations({ ...validations, isInvalidName: true });
				seterrorNameMessage("");
			} else {
				console.log(" name no");
				setValidations({ ...validations, isInvalidName: false });
				seterrorNameMessage("Name must be longer.");
			}
		}
		if (ev.target.name === "email") {
			if (/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(ev.target.value)) {
				console.log("email si");
				setValidations({ ...validations, isInvalidMail: true });
				seterrorMailMessage("");
			} else {
				console.log("email no");
				setValidations({ ...validations, isInvalidMail: false });
				seterrorMailMessage("Email must be formatted correctly.");
			}
		}
		if (ev.target.name === "phone") {
			if (
				/^[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{3}$/.test(
					ev.target.value
				)
			) {
				console.log("phone si");
				setValidations({ ...validations, isInvalidPhone: true });
				seterrorPhoneMessage("");
			} else {
				console.log("phone no");
				setValidations({ ...validations, isInvalidPhone: false });
				seterrorPhoneMessage("Phone must be formatted correctly.");
			}
		}
		if (ev.target.name === "message") {
			if (ev.target.value.length > 10) {
				console.log("message si");
				setValidations({ ...validations, isInvalidMessage: true });
				seterrorMessageMessage("");
			} else {
				console.log("message no");
				setValidations({ ...validations, isInvalidMessage: false });
				seterrorMessageMessage("Message must be longer.");
			}
		}
		if (dataForm.checkbox === true) {
			console.log("si");
		}
		if (dataForm.checkbox === false) {
			console.log("no");
		}

		setDataForm({ ...dataForm, [ev.target.name]: ev.target.value });
	};
	console.log(dataForm);
	const handleChange = () => {
		setcheckbox(!checkbox);
		if (checkbox === true) {
			setDataForm({ ...dataForm, checkbox: false });
			setHidden("hidden");
			return false;
		}
		if (checkbox === false) {
			setDataForm({ ...dataForm, checkbox: true });
			setHidden("");
			return true;
		}
	};
	const handleSubmit = (ev) => {
		ev.preventDefault();
		sendFormApi(dataForm);
		console.log(dataForm);
	};
	const handleTreatment = (ev) => {
		setTreatment(ev.target.value);
	};

	return (
		<div>
			<header>
				<nav className="header_nav">
					<a href="https://www.mediasmart.io/">
						<img
							className="logo_image"
							src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/mediasmartLogo.svg"
							alt="Mediasmart Logo"
						/>
					</a>
					{/* <div className="burguer_menu">
						<span className="burguer_menu--line--top"></span>
						<span className="burguer_menu--line--middle"></span>
						<span className="burguer_menu--line--bottom"></span>
					</div> */}
					<div className={burger} onClick={handleBurger} >
						<span></span>
					</div>
					<div className="div_menu">
						<ul className="navlist">
							<li className="navlist__element">solutions</li>
							<li className="navlist__element">resources</li>
							<li className="navlist__element">about us</li>
							<li className="navlist__element--border">log in</li>
							<li className="navlist__element--border">sign up</li>
						</ul>
					</div>
				</nav>
			</header>

			<div className="title">
				<h1 className="h1">get in touch</h1>
				<span className="line_red"></span>
				<span className="line_blue"></span>
			</div>
			<form className="form" action="" onSubmit={handleSubmit}>
				<div className="div">
					<div className="div__input">
						<input
							className="input"
							name="name"
							type="text"
							placeholder="Nombre"
							value={dataForm.name}
							onChange={handleInput}
							required
						/>
						<span className="span_message">{errorNameMessage}</span>
					</div>
					<div className="div__input">
						<label htmlFor="">Want to tell us your treatment?</label>
						<input
							className="input__checkbox"
							type="checkbox"
							name="checkbox"
							id="checkbox"
							name="treatment"
							checked={checkbox}
							onChange={handleChange}
						/>
						<select
							name="treatment"
							id="treatment"
							className={`${hidden}`}
							onChange={handleTreatment}
							value={treatment}
						>
							<option value="">Sr.</option>
							<option value="">Sra.</option>
						</select>
					</div>
					<div className="div__input">
						<input
							className="input"
							name="email"
							type="email"
							placeholder="Email"
							value={dataForm.email}
							onChange={handleInput}
							required
						/>
						<span className="span_message">{errorMailMessage}</span>
					</div>
					<div className="div__input">
						<input
							className="input"
							name="phone"
							type="tlf"
							placeholder="Telefono"
							value={dataForm.phone}
							onChange={handleInput}
							required
						/>
						<span className="span_message">{errorPhoneMessage}</span>
					</div>
					<div className="div__input">
						<input
							className="input__message"
							name="message"
							type="text"
							placeholder="Mensaje"
							value={dataForm.message}
							onChange={handleInput}
							required
						/>
						<span className="span_message">{errorMessageMessage}</span>
					</div>
					<input className="submit" type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
};

export default App;

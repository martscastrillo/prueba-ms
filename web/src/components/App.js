import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";

const App = () => {
	const [errorNameMessage, seterrorNameMessage] = useState("");
	const [errorMailMessage, seterrorMailMessage] = useState("");
	const [errorPhoneMessage, seterrorPhoneMessage] = useState("");
	const [errorMessageMessage, seterrorMessageMessage] = useState("");
	const [checkbox, setcheckbox] = useState(false);
	const [hidden, setHidden] = useState("hidden");
	const [active, setActive] = useState(false);
	const [burger, setBurger] = useState("burger");
	const [treatment, setTreatment] = useState("");
	const [dataForm, setDataForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		checkbox: false,
		treatment: "",
	});
	console.log(dataForm)
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
	};
	const handleInput = (ev) => {
		ev.preventDefault();
		if (ev.target.name === "name") {
			if (ev.target.value.length > 3) {
				setValidations({ ...validations, isInvalidName: true });
				seterrorNameMessage("");
			} else {
				setValidations({ ...validations, isInvalidName: false });
				seterrorNameMessage("Name must be longer.");
			}
		}
		if (ev.target.name === "email") {
			if (/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(ev.target.value)) {
				setValidations({ ...validations, isInvalidMail: true });
				seterrorMailMessage("");
			} else {
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
				setValidations({ ...validations, isInvalidPhone: true });
				seterrorPhoneMessage("");
			} else {
				setValidations({ ...validations, isInvalidPhone: false });
				seterrorPhoneMessage("Phone must be formatted correctly.");
			}
		}
		if (ev.target.name === "message") {
			if (ev.target.value.length > 10) {
				setValidations({ ...validations, isInvalidMessage: true });
				seterrorMessageMessage("");
			} else {
				setValidations({ ...validations, isInvalidMessage: false });
				seterrorMessageMessage("Message must be longer.");
			}
		}
		

		setDataForm({ ...dataForm, [ev.target.name]: ev.target.value });
	};

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
	};
	const handleTreatment = (ev) => {
		setTreatment(ev.target.value);
		setDataForm({ ...dataForm, [ev.target.name]: ev.target.value });
		
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
					<div className="burguer_menu">
						<div className={burger} onClick={handleBurger}>
							<span></span>
						</div>
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
						 <option></option>
							<option value="Sr.">Sr.</option>
							<option value="Sra.">Sra.</option>
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
			<section className="countriesSection">
				<div className="divCountries">
					<div className="divCountries__card">
						{" "}
						<img
							className="divCountries__card--pic"
							src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/contact-us/spain.svg"
							alt="Spain"
						/>
						<h3 className="divCountries__card--h3">Spain</h3>
						<p className="divCountries__card--text">
							Calle García de Paredes 12, 1º B, Madrid, 28010
						</p>{" "}
						<a
							className="divCountries__card--mail"
							target="_blank"
							rel="noreferrer"
							href="mailto:info@mediasmart.io"
						>
							info@mediasmart.io
						</a>
					</div>
					<div className="divCountries__card">
						{" "}
						<img
							className="divCountries__card--pic"
							src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/contact-us/gurgaon.svg"
							alt="India (Gurugram)"
						/>
						<h3 className="divCountries__card--h3">India (Gurugram)</h3>
						<p className="divCountries__card--text">
							3rd Floor, Tower-B, Awfis Unitech Cyber Park, Sector – 39,
							Gurugram-122002, Haryana
						</p>{" "}
						<a
							className="divCountries__card--mail"
							target="_blank"
							rel="noreferrer"
							href="mailto:info@mediasmart.io"
						>
							info@mediasmart.io
						</a>
					</div>
					<div className="divCountries__card">
						{" "}
						<img
							className="divCountries__card--pic"
							src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/contact-us/bangalore.svg"
							alt="India (Bangalore)"
						/>
						<h3 className="divCountries__card--h3">India (Bengaluru)</h3>
						<p className="divCountries__card--text">
							Vaishnavi Tech Park, Ground Floor, Sarjapur Main Rd, Bellandur,
							Bengaluru, Karnataka 560103
						</p>{" "}
						<a
							className="divCountries__card--mail"
							target="_blank"
							rel="noreferrer"
							href="mailto:info@mediasmart.io"
						>
							info@mediasmart.io
						</a>
					</div>

					<div className="divCountries__card">
						{" "}
						<img
							className="divCountries__card--pic"
							src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/contact-us/singapore.svg"
							alt="Singapore"
						/>
						<h3 className="divCountries__card--h3">Singapore</h3>
						<p className="divCountries__card--text">
							100 Pasir Panjang Road, #06-07 Singapore, 118518
						</p>{" "}
						<a
							className="divCountries__card--mail"
							target="_blank"
							rel="noreferrer"
							href="mailto:info@mediasmart.io"
						>
							info@mediasmart.io
						</a>
					</div>
					<div className="divCountries__card">
						{" "}
						<img
							className="divCountries__card--pic"
							src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/contact-us/indonesia.svg"
							alt="Indonesia"
						/>
						<h3 className="divCountries__card--h3">Indonesia</h3>
						<p className="divCountries__card--text">
							PT Affle Indonesia WeWork Noble House Noble House, 30th Floor Jl
							Dr. Ide Anak Agung Gde Agung Kav E.4. No. 2 Kuningan, Jakarta
							Selatan 12950
						</p>{" "}
						<a
							target="_blank"
							className="divCountries__card--mail"
							rel="noreferrer"
							href="mailto:info@mediasmart.io"
						>
							info@mediasmart.io
						</a>
					</div>
					<div className="divCountries__card">
						{" "}
						<img
							className="divCountries__card--pic"
							src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/contact-us/dubai.svg"
							alt="Dubai"
						/>
						<h3 className="divCountries__card--h3">UAE</h3>
						<p className="divCountries__card--text">
							Affle MEA, Building 17, Office 351, Third Floor, Dubai Internet
							City, Dubai, UAE
						</p>{" "}
						<a
							className="divCountries__card--mail"
							target="_blank"
							rel="noreferrer"
							href="mailto:info@mediasmart.io"
						>
							info@mediasmart.io
						</a>
					</div>
					<div className="divCountries__card">
						{" "}
						<img
							className="divCountries__card--pic"
							src="https://www.mediasmart.io/hubfs/raw_assets/public/MEDIASMART/mediasmart-hubspot/assets/images/contact-us/brazil.svg"
							alt="Brazil"
						/>
						<h3 className="divCountries__card--h3">Brazil</h3>
						<p className="divCountries__card--text">
							Av. Paulista, 1374 - Bela Vista, São Paulo - SP, 01310-100, Brazil
						</p>{" "}
						<a
							className="divCountries__card--mail"
							target="_blank"
							rel="noreferrer"
							href="mailto:info@mediasmart.io"
						>
							info@mediasmart.io
						</a>
					</div>
				</div>
			</section>
			<Footer></Footer>
			
		</div>
	);
};

export default App;

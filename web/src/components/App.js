import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Form from "./Form";
import CountrySection from "./CountrySection";
import Footer from "./Footer";

const App = () => {
	const [errorNameMessage, seterrorNameMessage] = useState("");
	const [errorMailMessage, seterrorMailMessage] = useState("");
	const [errorPhoneMessage, seterrorPhoneMessage] = useState("");
	const [errorMessageMessage, seterrorMessageMessage] = useState("");
	const [checkbox, setCheckbox] = useState(false);
	const [hidden, setHidden] = useState("hidden");
	const [active, setActive] = useState(false);
	const [burger, setBurger] = useState("burger");
	const [treatment, setTreatment] = useState("");
	const [dataForm, setDataForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		treatment: "",
	});

	const sendFormApi = (data) => {
		apiData.sendFormApi(data).then((response) => {
			if (response) {
				setDataForm(response.dataForm);
			}
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
				seterrorNameMessage("");
			} else {			
				seterrorNameMessage("Name must be longer.");
			}
		}
		if (ev.target.name === "email") {
			if (/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(ev.target.value)) {
				seterrorMailMessage("");
			} else {
				seterrorMailMessage("Email must be formatted correctly.");
			}
		}
		if (ev.target.name === "phone") {
			if (/^[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{3}$/.test(ev.target.value)){
				seterrorPhoneMessage("");
			} else {
				seterrorPhoneMessage("Phone must be formatted correctly.");
			}
		}
		if (ev.target.name === "message") {
			if (ev.target.value.length > 10) {
				seterrorMessageMessage("");
			} else {
				seterrorMessageMessage("Message must be longer.");
			}
		}
		setDataForm({ ...dataForm, [ev.target.name]: ev.target.value });
	};

	const handleChange = () => {
		setCheckbox(!checkbox);
		if (checkbox === true) {
			setDataForm({ ...dataForm, checkbox: false });
			setHidden("hidden");
		}
		if (checkbox === false) {
			setDataForm({ ...dataForm, checkbox: true });
			setHidden("");
		}
	};
	const handleSubmit = (ev) => {
		ev.preventDefault();
		sendFormApi(dataForm);
		resetForm();
	};
	const handleTreatment = (ev) => {
		setTreatment(ev.target.value);
		setDataForm({ ...dataForm, [ev.target.name]: ev.target.value });
	};
	const resetForm = () => {
		setDataForm({name: "",
		email: "",
		phone: "",
		message: "",
		treatment: ""});
		setCheckbox(false);
		setHidden("hidden");
	};
	return (
		<div>
			<Header burger={burger} handleBurger={handleBurger}></Header>
			<Form handleSubmit={handleSubmit} handleInput={handleInput} errorNameMessage={errorNameMessage} checkbox={checkbox} handleChange={handleChange} hidden={hidden} dataFormEmail={dataForm.email} dataFormPhone={dataForm.phone} dataFormName={dataForm.name}   dataFormMessage={dataForm.message} handleTreatment={handleTreatment} treatment={treatment} errorPhoneMessage={errorPhoneMessage} errorMailMessage={errorMailMessage} errorMessageMessage={errorMessageMessage}
			 ></Form>
			<CountrySection></CountrySection>
			<Footer></Footer>
		</div>
	);
};

export default App;

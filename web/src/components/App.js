import apiData from '../services/api';
import { useState } from 'react';
import '../stylesheets/index.scss';


const App = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [validations, setValidations] = useState({
    isInvalidName: false,
    isInvalidMail: false,
    isInvalidPhone: false,
    isInvalidMessage: false,
  });

  const sendFormApi = (data) => {
    apiData.sendFormApi(data).then(response => {
      if (response) {
        setDataForm(response.dataForm);
        
        // Si la usuaria introduce bien sus datos redireccionamos desde la página de login al inicio de la página

      }  /*else { */
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        /* setLoginErrorMessage(response.errorMessage);*/
    /*   } */
    });
    
  };

  const handleInput = (ev) => {
    ev.preventDefault();   
    if(ev.target.name === 'name'){
   
      if (ev.target.value.length > 3) {
        console.log('name si')
        setValidations({ ...validations, isInvalidName: true });
      } else {
        console.log(' name no')
        setValidations({ ...validations, isInvalidName: false });
      }
    }
    if(ev.target.name === 'email'){
      if (/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(ev.target.value)) {
        console.log('email si')
        setValidations({ ...validations, isInvalidMail: true });
        
      } else {
        console.log('email no')
        setValidations({ ...validations, isInvalidMail: false });
      }
    }
    if(ev.target.name === 'phone'){
      if (/^[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{3}$/.test(ev.target.value)) {
        console.log('phone si')
        setValidations({ ...validations, isInvalidPhone: true });
      } else {
        console.log('phone no')
        setValidations({ ...validations, isInvalidPhone: false });
      }
    }
    if(ev.target.name === 'message'){
      if (ev.target.value.length > 10) {
        console.log('message si')
        setValidations({ ...validations, isInvalidMessage: true });
      } else {
        console.log('message no')
        setValidations({ ...validations, isInvalidMessage: false });
      }
    }
  
    setDataForm({ ...dataForm, [ev.target.name]: ev.target.value });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    sendFormApi(dataForm);
    console.log(dataForm)
    
  };


  return (
    <div>
      <div className="title">
      <h1 className="h1">get in touch</h1>
      <span className="line_red"></span>
      <span className="line_blue"></span></div>
      <form className="form" action="" onSubmit={handleSubmit}>
        <div className="div">
        <div className="div_input"><input className="input" name="name" type="text" placeholder="Nombre" value={dataForm.name} onChange={handleInput} /></div>
        
        <div className="div_input"><input className="input" name="email" type="email" placeholder="Email" value={dataForm.email} onChange={handleInput} /></div>
        <div className="div_input"><input className="input" name="phone" type="tlf" placeholder="Telefono" value={dataForm.phone} onChange={handleInput} /></div>
        <div className="div_input"><input className="input" name="message" type="text" placeholder="Mensaje" value={dataForm.message} onChange={handleInput} /></div>
        </div>
        <input className="submit" type="submit" value="Submit" />
      </form >
    </div >
  )
};

export default App;

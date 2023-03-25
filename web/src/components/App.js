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

  const sendFormApi = (data) => {
    apiData.sendFormApi(data).then(response => {
      if (response.success === true) {
        setDataForm(response.dataForm);
        // Si la usuaria introduce bien sus datos redireccionamos desde la página de login al inicio de la página
       
      } else {
        // Si la usuaria introduce mal sus datos guardamos el error que nos devuelve el API para que se pinte en la página
        /* setLoginErrorMessage(response.errorMessage);*/ 
      } 
    });
    console.log('hola')
  };

  const handleInput = (ev) => {
    ev.preventDefault();
    setDataForm({...dataForm, [ev.target.name]: ev.target.value});
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    sendFormApi(dataForm);
    console.log('hola')
  };


    return(
       <div>
          <h1 className="h1">get in touch</h1>
          <span className="line_red"></span>
          <span className="line_blue"></span>
      <form action="" onSubmit={handleSubmit}>
        <input className ="input" name="name" type="text" placeholder="Nombre" value={dataForm.name} onChange={handleInput}/>
        <input className ="input" name="email" type="email" placeholder="Email" value={dataForm.email} onChange={handleInput}/>
        <input className ="input" name="phone" type="tlf" placeholder="Telefono" value={dataForm.phone} onChange={handleInput}/>
        <input className ="input" name="message" type="text" placeholder="Mensaje" value={dataForm.message} onChange={handleInput}/>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
};

export default App;

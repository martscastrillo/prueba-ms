const Form = (props) => {
    return(
        <>
    
        <div className="title">
        <h1 className="h1">get in touch</h1>
        <span className="line_red"></span>
        <span className="line_blue"></span>
    </div>
        <form className="form" action="" onSubmit={props.handleSubmit}>
        <div className="div">
            <div className="div__input">
                <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    value={props.dataFormName}
                    onChange={props.handleInput}
                    required
                />
                <span className="span_message">{props.errorNameMessage}</span>
            </div>
            <div className="div__input">
                <label htmlFor="">Want to tell us your treatment?</label>
                <input
                    className="input__checkbox"
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    checked={props.checkbox}
                    onChange={props.handleChange}
                />
                <select
                    name="treatment"
                    id="treatment"
                    className={`${props.hidden}`}
                    onChange={props.handleTreatment}
                    value={props.treatment}
                >
                    <option></option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                </select>
            </div>
            <div className="div__input">
                <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={props.dataFormEmail}
                    onChange={props.handleInput}
                    required
                />
                <span className="span_message">{props.errorMailMessage}</span>
            </div>
            <div className="div__input">
                <input
                    className="input"
                    name="phone"
                    type="tlf"
                    placeholder="Phone"
                    value={props.dataFormPhone}
                    onChange={props.handleInput}
                    required
                />
                <span className="span_message">{props.errorPhoneMessage}</span>
            </div>
            <div className="div__input">
                <input
                    className="input__message"
                    name="message"
                    type="text"
                    placeholder="Message"
                    value={props.dataFormMessage}
                    onChange={props.handleInput}
                    required
                />
                <span className="span_message">{props.errorMessageMessage}</span>
            </div>
            <input className="submit" type="submit" value="Submit" />
        </div>
    </form>    </>
    );
    }
    export default Form;





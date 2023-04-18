import React from 'react';

export class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <form
          aria-label={this.props.formAriaText}
          id={this.props.formId}
          onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

/**
 * *this doc block contains param's that are used in almost all functions under it. so this doc block will serve as a legenda for these param's
 * @param props props is een React object waar alle data aan wordt meegegeven.
 * @param props.gridLocation verwacht een className waar de grid positie in staat. werkt alleen als deze in een grid zit.
 * @param props.className verwacht een className met de gewenste styling van de input en label.
 * ? should props.name also be used for the input id
 * @param props.Name the name for the input and name used to connect the label.
 * @param props.label the text shown inside the label
 * @param props.type here you can add a type to your input 
 * * the next 2 param where made with the intention to call "this" from this Form and not the class where this function is called
 * @param props.handleChange if the input has to do a action when change occurs a function can be connected in this variable. function has to be in the Form class
 * @param props.state expects {this.state}. so you can use state inside a different class.
 * * the placeholder is nessesary for css styling and should always contain a space, but cannot have a value due to accesibility reasons.
 */


/**
 * *all param's are located in the doc block above.
 * this function exports a input field with label. the data that is expected is sent via props.
 * @returns a input field with a label and icon inside a div
 */
export function Input(props) {
  return (
    <div
        className={`${props.gridLocation}
        ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input 
        placeholder=" "
        aria-errormessage={props.errorId}
        id={props.name}
        name={props.name}
        type={props.type}
        onChange={props.handleChange}
        defaultValue={props.state.projectName}
      />
      <p id={props.errorId} className="errormessage">{`Error: ${props.errorMessage}`}</p>
    </div>
  );
}


/**
 * *all param's are located in the doc block above.
 * this function exports a input field with label and a icon. the data that is expected is sent via props.
 * @returns a input field with a label inside a div
 */
export function IconInput(props) {
  return (
    <div
        className={`${props.gridLocation}
        ${props.className}-icon`}>
      <label htmlFor={props.name}>{props.label}</label>
      <span>
        <i aria-label={props.iconAriaLabel} className={props.iconClass}></i>
      </span>
      <input 
        placeholder=" "
        aria-errormessage={props.errorId}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value} // temporary for inlog hook test
        onChange={props.handleChange} // temporary for inlog hook test
        // defaultValue={props.state.projectName}
      />
      <p id={props.errorId} className="errormessage">{`Error: ${props.errorMessage}`}</p>
    </div>
  );
}


/**
 * *some param's are located in the doc block above.
 * this function exports a select dropdown with label.
 * @param props.variables expects a array of objects with the values name and value.
 * @returns a select field with a label inside a div
 */
export function Select(props) {
  return (
    <div className={`${props.gridLocation} ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>

      <select
          id={props.name}
          name={props.name}
          onChange={props.handleChange}>
        <option value="0" >choose a option.</option>

        {props.variables.map(variable => (
          <option
              key={variable.name}
              value={variable.value}>
            {variable.name}
          </option>
        ))};
      
      </select>
    </div>
  );
}

/**
 * *all param's are located in the doc block above.
 * this function exports a text area. the data that is expected is sent via props.
 * @returns a text area with a label
 */
export function Textarea(props) {
  return (
    <div className={`${props.gridLocation} ${props.className}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        placeholder=" "
        id={props.name}
        name={props.name}
        onChange={props.handleChange}/>
    </div>
  );
}

/**
 * *some param's are located in the doc block above.
 * this function exports a text area. the data that is expected is sent via props.
 * @param props.title here you can add a title to show on hover of the element
 * @returns an upload field inside a div
 */
export function Upload(props) {
  return (
    <div className={props.gridLocation}>
      <input
      title={props.title}
      type="file"
      id={props.idName}
      className={props.className}
      name={props.name}
      onChange={props.handleChange}
    />
    </div>
  );
}
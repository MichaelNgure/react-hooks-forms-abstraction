import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Henry'
  })

  // function handleFirstNameChange(event) {
  //   // setFirstName(event.target.value);
  //   setFormData({...formData, firstName: event.target.value})
  // }

  // function handleLastNameChange(event) {
  //   // setLastName(event.target.value);
  //   setFormData({...formData, lastName: event.target.value})
  // }

  function handleChange(event){
    const name = event.target.name
    let value = event.target.value

    // use `checked` property of checkboxes instead of value 

    if (event.target.type === 'checkbox'){
      value = event.target.checked
    }

    setFormData({...formData, [name]: value})

    function handleSubmit(event){
      event.preventDefault()
      console.log(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.firstName}  name="firstName"/>
      <input type="text" onChange={handleChange} value={formData.lastName}  name="lastName"/>
      <input 
      type="checkbox"
      name="admin"
      onChange={handleChange}
      value={formData.name}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

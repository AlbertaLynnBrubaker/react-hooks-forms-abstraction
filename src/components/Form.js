import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });
  
  function handleChangeEvent(e) {
    const name = e.target.name;
    let value = e.target.value;

    if(e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <form>
      <input 
        type="text"
        name= "firstName" 
        onChange={handleChangeEvent} 
        value={formData.firstName}
      />
      <input
        type="text"
        name= "lastName" 
        onChange={handleChangeEvent} 
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChangeEvent}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

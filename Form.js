import React, { useEffect, useState } from 'react';
import '../css/style.css';
import axios from "axios";


 const Form = () => {

  const [data, setData] = useState ({
    firstname: '',
    lastname: '', 
    dateofbirth: '', 
    gender: '',
    nationality: '', 
    martialstatus: '', 
    languagespoken: '', 
    employeephoto: '',
  })

  const handleInput = (event) => {
    setData ({... data, [event.target.name]: event.target.value})
  }

  function employee(event){
    event.preventDefault()
    axios.post("http://localhost:5247/api/EmployeeInformation/CreateEmployeeInformation", {data})
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  return (
    
    <div>
<form onSubmit={employee}>
<input type='text' onChange={handleInput} name='firstname'/> <br/> <br/>
<input type='text' onChange={handleInput} name='lastname'/> <br/> <br/>
<input type='text' onChange={handleInput} name='dateofbirth'/> <br/> <br/>
<input type='text' onChange={handleInput} name='gender'/> <br/> <br/>
<input type='text' onChange={handleInput} name='nationality'/> <br/> <br/>
<input type='text' onChange={handleInput} name='martialstatus'/> <br/> <br/>
<input type='text' onChange={handleInput} name='languagespoken'/> <br/> <br/>
<input type='text' onChange={handleInput} name='employeephoto'/> <br/> <br/>

<button type='submit'>Save</button>
</form>

  


    </div>
  ) 
}

export default Form;


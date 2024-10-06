import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'


const Form = (props) => {
  var[inputs,setInputs]=useState({Name: "", Age: "", Dept: "",Sal: ""})
  var location = useLocation()
  console.log(location.state)

useEffect(() => {
  if (location.state !== null) {
    setInputs({
      ...inputs,
      Name: location.state.val.Name,
      Age: location.state.val.Age,
      Dept: location.state.val.Dept,
      Sal: location.state.val.Sal,
  })
  }

})

//data inside console
const inputHandler = (e) => {
  setInputs({ ...inputs, [e.target.name]:e.target.value})
  console.log(inputs);
}


//submit
const addHandler = () => {
  if (location.state !== null) {
    axios.put("http://localhost:3004/update/", +location.state.val._id, inputs)
       .then((response) => {
         alert(response.data.message)
         navigate("/form") 
       })
       .catch((err) => { console.log(err)})
      }
      else {
        axios.post("http://localhost:3004/form",inputs)
          .then ((response) => {
          console.log(response)
          alert(response.data.message)
          navigate("/form") 

  })
}
}


     

  



  return (
    <div>
        <h1>Employee Form</h1>
        <TextField label="Name" variant="outlined" value={inputs.Name} onChange={inputHandler} name='Name'></TextField> <br/>

        <TextField label="Age" variant="outlined" value={inputs.Age} onChange={inputHandler} name='Age'></TextField><br/>

        <TextField label="Dept" variant="outlined" value={inputs.Dept} onChange={inputHandler} name='Dept'></TextField><br/>

        <TextField label="Sal" variant="outlined" value={inputs.Sal} onChange={inputHandler} name='Sal'></TextField><br/>
        
        <Button variant="outlined" onClick={addHandler}>Submit</Button>



    </div>
  )
}

export default Form
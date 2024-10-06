import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



//view
const View = () => {
    var [user, setUser] = useState([]);
    var navigate = useNavigate()
    
    axios.get("http://localhost:3004/view")
        .then((response)=> { 
            console.log(response.data)
            setUser(response.data)
            console.log(user)
        })

// delete
const delValue = (id) => {
    console.log(id)
    axios.delete("http://localhost:3004/remove/"+ id)
    .then((response)=> { 
        alert(response.data.message)
        window.location.reload()
})
}

// update
const updateValue = (val) => {
    navigate("/form",{state:(val)})
    
  }
  


        
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>AGE</TableCell>
                        <TableCell>DEPARTMENT</TableCell>
                        <TableCell>SALARY</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val) => {
                        return (
                            <TableRow>
                            <TableCell>{val.Name}</TableCell>
                            <TableCell>{val.Age}</TableCell>
                            <TableCell>{val.Dept}</TableCell>
                            <TableCell>{val.Sal}</TableCell>
                            <Button variant='contained' color='success' onClick={() => updateValue(val)}>UPDATE</Button>&nbsp;
                            <Button variant='contained' color='warning' onClick={() => delValue(val._id)}>DELETE</Button>
    
                    </TableRow>

                        )
                    })}
               
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View
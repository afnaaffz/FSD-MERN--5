import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant ="h6">empapp</Typography>&nbsp;&nbsp;
                <Link to='/form'>
                    <Button variant='contained' color='secondary'>ADD</Button>
                </Link>&nbsp;
                <Link to='/view'>
                    <Button variant='contained' color='success'>VIEW</Button>
                </Link>&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
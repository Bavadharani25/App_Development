import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
function Login() {
    let name=useRef(null)
    let password=useRef(null)

    const [error,setError]=useState({name:false,password:false})
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name.current.value)
        console.log(password.current.value)

        if(name.current.value && password.current.value){
            console.log(name.current.value)
            console.log(password.current.value)
        }else{
        if(!name.current.value && !password.current.value){
            setError((prev)=>{
               return{...prev,name:true,password:true};
            })
        }
        else if(!name.current.value){
            setError((prev)=>{
               return{...prev,name:true};
            })
        }
        else if(!password.current.value){
            setError((prev)=>{
                return{...prev,password:true}
            })
        }
        console.log("Error")
    }
    }
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      width:"100",
      height:"100vh"
    }}
    noValidate
    autoComplete="off"
  >
    <Typography sx={{textAlign:"center"}} variant='h4'>Login</Typography>

    <Box>
    <TextField inputRef={name} id="outlined-basic" label="Name" variant="outlined" />
        {error.name&&(<Typography color={"red"} fontSize={"10px"}>
            Fill the name
    </Typography>)}
    </Box>

    <Box>
    <TextField inputRef={password} id="outlined-basic" label="Password" variant="outlined" />
        {error.password&&(<Typography color={"red"} fontSize={"10px"}>
             Fill the Password
    </Typography>)}
    </Box>

    <Button onClick={handleSubmit}variant="contained">Submit</Button>

    <Button variant="text">
      <Link to="/registration">Register now</Link>
    </Button>
  </Box>

  
  )
}

export default Login
import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
function Register() {
    let name=useRef(null)
    let password=useRef(null)
    let email=useRef(null)
    const [error,setError]=useState({name:false,password:false,email:false})
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name.current.value)
        console.log(password.current.value)
        console.log(email.current.value)

        if(name.current.value && password.current.value && email.current.value){
           
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.current.value)){
                setError((prev)=>{
                    return{...prev,email:true,password:false,name:false}
                })
            }
            else{
                setError((prev)=>{
                    return{...prev,email:false,password:false,name:false}
                })
            console.log(name.current.value)
            console.log(password.current.value)
            console.log(email.current.value)
            }
        }else{
        if(!name.current.value && !password.current.value && !email.current.value){
            setError((prev)=>{
               return{...prev,name:true,password:true,email:true};
            })
        }
        else if(!name.current.value && !password.current.value){
            setError((prev)=>{
               return{...prev,name:true,password:true};
            })
        }
        else if(!name.current.value && !email.current.value){
            setError((prev)=>{
               return{...prev,name:true,email:true};
            })
        }
        else if(!password.current.value && !email.current.value){
            setError((prev)=>{
               return{...prev,password:true,email:true};
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
        else if(!email.current.value){
            setError((prev)=>{
                return{...prev,email:true}
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
            Fill the Name
    </Typography>)}
    </Box>

    <Box>
    <TextField inputRef={email} id="outlined-basic" label="Email" variant="outlined" />
        {error.email&&(<Typography color={"red"} fontSize={"10px"}>
            Fill the Email
    </Typography>)}
    </Box>

    <Box>
    <TextField inputRef={password} id="outlined-basic" label="Password" variant="outlined" />
        {error.password&&(<Typography color={"red"} fontSize={"10px"}>
             Fill the Password
    </Typography>)}
    </Box>

    <Button onClick={handleSubmit}variant="contained">Submit</Button>
  </Box>

  
  )
}

export default Register
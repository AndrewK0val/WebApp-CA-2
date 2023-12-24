import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Navigate, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../contexts/authContext';





export default function LoginOrSignupPage() {

    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")
    const [registrationUsername, setRegistrationUsername] = useState("");
    const [registrationPassword, setRegistrationPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);

    const login = () => {
        context.authenticate(userName, password);
    };


    const register = () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegEx.test(registrationPassword);
    
        if (validPassword && registrationPassword === passwordAgain) {
          context.register(registrationUsername, registrationPassword);
          setRegistered(true);
        }
      }

    let location = useLocation();

    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };
    if (registered === true) {
        return <Navigate to="/login" />;
      }
    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }
    return (
        <Grid>
                   
                {/* <Typography variant="h6" sx={{ marginBottom: '1rem' }}> User Logged In: {userName} </Typography> */}
                         {/* <Button variant="contained" color="secondary" onClick={logout}> Sign Out </Button> */}
                    <Typography variant="h4" sx={{ marginBottom: '1rem', marginTop:'2rem' ,fontFamily:'Merriweather' }}> Login </Typography>
                    <TextField
                        placeholder="Email..."
                        onChange={e => {
                            setUserName(e.target.value);
                        }}
                        sx={{ marginBottom: '1rem', borderRadius: '5px', boxShadow:'5px 5px 14px #bebebe,-5px -5px 14px #ffffff' }}
                    />
                    <TextField
                        placeholder="Password..."
                        type='password'
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        sx={{ marginBottom: '1rem', borderRadius: '5px', boxShadow:'5px 5px 14px #bebebe,-5px -5px 14px #ffffff' }}/>
        
                    <Button variant="contained" color="primary" sx={{marginBottom:'6rem'}} onClick={login}> Login</Button>
                    
                    <Typography variant="h4" sx={{ marginBottom: '1rem', marginTop:'2rem',fontFamily:'Merriweather' }}> Register </Typography>
                    
                    <TextField
                        placeholder="Email..."
                        onChange={e => {
                            setRegistrationUsername(e.target.value);
                        }}
                        sx={{ marginBottom: '1rem', borderRadius: '5px', boxShadow:'5px 5px 14px #bebebe,-5px -5px 14px #ffffff' }}
                    />
                    <TextField
                        placeholder="Password..."
                        type='password'
                        onChange={e => {
                            setRegistrationPassword(e.target.value);
                        }}
                        sx={{ marginBottom: '1rem', borderRadius: '5px', boxShadow:'5px 5px 14px #bebebe,-5px -5px 14px #ffffff' }}
                    />
                    <TextField
                        placeholder="Password..."
                        type='password'
                        onChange={e => {
                            setPasswordAgain(e.target.value);
                        }}
                        sx={{ marginBottom: '1rem', borderRadius: '5px', boxShadow:'5px 5px 14px #bebebe,-5px -5px 14px #ffffff' }}
                    />
                    <Button variant="contained" color="primary" sx={{marginBottom:'6rem'}} onClick={register}> Register    </Button>
        </Grid>     
    )
}
import React, {useState} from 'react';
import { Grid, Paper, Avatar, Typography} from '@material-ui/core';
//import {useForm} from '../../hook/useForm.js'
import './Register.css';

export const Register = () => {
const paperStyle={padding:'10px 30px',width:'540px', height:'670px' ,margin:'30px auto',radius:'8px'}
const headerStyle={width:'494px',height:'24px',top:'100px',left:'32px',opacity:'70%'}
const headerStyle2={width:'494px',height:'30px',top:'156px',left:'32px'}
const headerStyle3={width:'494px',height:'20px',top:'198px',left:'32px'}
const headerStyle4={width:'144px',height:'20px',top:'571px',left:'177px'}
const headerStyle5={width:'85px',height:'13px',top:'354px',left:'441px'}
const avatarStyle={width:'48px', height:'48px',background:'blue'}
//const botonStyle={width:'490px',margin:'2em auto', padding:'0.25em 1em'};
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const onInputChange = e => {
        const { name , value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }
    const handleSubmit = (e) => {return}
    const validateInput = e => {
        let { name , value } = e.target;
        setError( prev => {
            const stateObj = { ...prev, [name]: "" };
            switch (name){
                case "email":
                    if(!value && value !== null){
                        stateObj[name] = "Porfavor Ingrese Email";
                    }
                    break;
                case "password":
                    if(!value){
                        stateObj[name] = "porfavor ingresa una contraseña";
                    }else if(input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirPassword"]="Password y confirmacion del password no son identicas";
                    }else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;
                case "confirmPassword":
                    if(!value){
                        stateObj[name]="porfavor ingresa una contraseña de confirmacion";
                    }else if(input.password && value !== input.password) {
                        stateObj[name]="Password y confirmacion del password no son identicas";
                    }
                    break;
                default:
                break;
            }
            return stateObj;
        }); 
    }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>  
                    <Avatar style={avatarStyle}>   
                    <svg>
                        <ellipse/>
                    </svg>
                    </Avatar>
                    <h6 style={headerStyle}>Plagio Control</h6>
                </Grid>
                <Grid align='center'>  
                    <h2 style={headerStyle2}>Login Plagio Control</h2>
                    <Typography style={headerStyle3} variant='caption'>    
                        Enter your emai and password below
                    </Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <br></br>
                    <label>EMAIL</label>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Ingrese su email'
                        value={input.email}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required></input>
                    {error.email && <span className='err'>{error.email}</span>}
                    <br></br>
                    <label>PASSWORD <Typography style={headerStyle5} variant='caption'>    
                        <p>ForgoutPassword?</p>
                    </Typography></label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Ingrese su contraseña'
                        value={input.password}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required></input>
                    {error.password && <span className='err'>{error.password}</span>}
                    <br></br>
                    <label>RE-PASSWORD</label>
                    <input 
                        type='password'
                        name='confirmPassword'
                        placeholder='Ingrese su contraseña'
                        value={input.confirmPassword}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required></input>
                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                    <br></br>
                    <button type='submit' value='enviar'>Submit</button>
                        <Grid align='center'>
                            <Typography style={headerStyle4} variant='caption'>    
                                Ya tienes una cuenta?  <a href="">Login</a>
                            </Typography>
                        </Grid>
                </form>
            </Paper>
        </Grid>
    )
}
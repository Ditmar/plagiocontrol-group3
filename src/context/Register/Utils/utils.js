// import { InputBase } from '@material-ui/core';
// import useState  from 'react';
// import input from '../../../hooks/useForm';
//import validateInput from '../Register'
// import setInput from '../../../hooks/useForm';
// import error from '../../../hooks/useForm';
// import setError from '../../../hooks/useForm';
// import useForm from '../../../hooks/useForm';
// const {input} = useForm();

// export const onInputChange = e => {
//     const { name , value } = e.target;
//     setInput(prev => ({
//         ...prev,
//         [name]: value
//     }));
//     validateInput(e);
// };
// export const validateInput = e => {
//     let { name , value } = e.target;
//     setError( prev => {
//         const stateObj = { ...prev, [name]: "" };
//         switch (name){
//             case "email":
//                 if(!value && value !== null){
//                     stateObj[name] = "Porfavor Ingrese Email";
//                 }
//                 break;
//             case "password":
//                 if(!value){
//                     stateObj[name] = "porfavor ingresa una contraseña";
//                 }else if(input.confirmPassword && value !== input.confirmPassword) {
//                     stateObj["confirPassword"]="Password y confirmacion no coinciden";
//                 }else {
//                     stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
//                 }
//                 break;
//             case "confirmPassword":
//                 if(!value){
//                     stateObj[name]="porfavor ingrese la contraseña de confirmacion";
//                 }else if(input.password && value !== input.password) {
//                     stateObj[name]="Password y confirmacion no coinciden";
//                 }
//                 break;
//             default:
//             break;
//         }
//         return stateObj;
//     }); 
// };
// export const headleSubmit = (e)=>{
//     e.preventDefault();
//     console.log(input);
//     alert("Send to api");
// };

import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../Firebase/Firebase';

const SingUp = () => {

    const [registerError , setregisterError] = useState('')

    const [sucess , setsucess] =useState('');

    const [showPass , setShowPass] = useState(false);

   const HandelRegister = e =>{

    e.preventDefault();
 
   const email =  e.target.email.value;

   const password = e.target.password.value;

   const termsAndCondition = e.target.terms.checked ; 

   console.log(email , password, termsAndCondition)

  //set empty     
   setregisterError('')
   setsucess('')
   
//    password chake 

 if( password < 6){

    setregisterError('password is less 6 carecter')

    return;
 }
 else if(!/[A-Z]/.test(password)){
      
    setregisterError('Please input uper Later Character')
    return;
 } 

 else if (!termsAndCondition){
    setregisterError('Please cheake our terms and condition ')
    return;
 }

//   
   createUserWithEmailAndPassword( auth , email , password)
   .then(result => {

    console.log(result.user)
    setsucess('user created sucessfully')

   })

   .catch(error =>{
    console.error(error)
    setregisterError(error.message)
   })
   

   }


    return (
        <div >
           
         <div className='mx-auto w-1/2 border p-5'>

         <h2 className="text-4xl">Please Registation</h2>

            <form onSubmit={HandelRegister} >
            
            <input className='py-2 px-4 mt-3 w-full'  type="email" name="email" id="2" placeholder='Enter Email' required />
            <br />
            <input className='py-2 px-4 mt-3 w-full' type={ showPass ? "Text" : " password"} name="password" id="2" placeholder='Enter Password' required />
            <span  onClick={ () => setShowPass(!showPass)}>show</span>

            <br />

           <input type="checkbox" name="terms" id="" />
           <label htmlFor="terms"> Please Accepte Terms and Condition </label>
            <button className='btn btn-secondary py-2 px-4 mt-3  w-full'> Submit </button>

            </form>
            {
                registerError && <p className='text-red-600'>{registerError}</p>
            }
            {
                sucess && <p className='text-green-600'> {sucess}</p>
            }
         </div>
            
        </div>
    );
};

export default SingUp;
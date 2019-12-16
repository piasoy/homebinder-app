import React from 'react';
import Alert from 'react-bootstrap/Alert';


//map through loginErrors keys
const LoginErrors = ({loginErrors}) =>
  <div className='loginErrors'>
    {Object.keys(loginErrors).map((fieldName) => {
        if ((fieldName === 'email') && (loginErrors[fieldName].length > 0)){
            return (
                <Alert variant="warning">
                    <p>Please enter a valid {fieldName}.</p>
                </Alert>
            
            )        
        } 
        if ((fieldName === 'password') && (loginErrors[fieldName].length > 0)){
            return (
                <Alert variant="warning">
                    <p>Password must be 8 or more characters.</p>
                </Alert>
            
            ) 
        }
        else {return '';}
    })}
  </div>

export default LoginErrors
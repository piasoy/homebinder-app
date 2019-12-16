import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginErrors from './LoginErrors';
import './Login.css';


  class Login extends React.Component {
    //initialize state
    //set email & password to empty strings
    //loginErrors property with input field names as keys and validation errors as values, start as empty strings
    //emailValid,  passwordValid,  formValid are boolean propertiesto enable/disable submit button, start as false
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginErrors: {email: '', 
                        password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
  
    }

    //update state on user input
    handleUserInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    
      }

    
      
    validateField(fieldName, value) {
    let fieldValidationErrors = this.state.loginErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
            case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
            case 'password':
            passwordValid = value.length >= 8;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
            default:
            break;
        }

        this.setState({loginErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                        }, this.validateForm);
        }
      
    validateForm() {
            this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
  
   render() {
     return (
      <Container >
       
            
      
        <Row className="form-outer-wrapper">
          <Col className="form-inner-wrapper" sm={6}>
            <Form className="form" onSubmit={this.handleSubmit}  >
                <Form.Group>
                    <Form.Control 
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        size="lg"
                        value={this.state.email} 
                        onChange={this.handleUserInput}/> 
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        size="lg" 
                        value={this.state.password} 
                        onChange={this.handleUserInput}/>
                </Form.Group>
                <Button 
                    variant="warning" 
                    type="submit" 
                    disabled={!this.state.formValid}>
                    
                    Login
                </Button>
            </Form>
            <p className="reset-pw float-left"><a href="">Forgot Password</a></p>
            <p className="float-left">&nbsp;|&nbsp;</p>
            <p className="sign-up"><a href="">Sign Up</a></p>
            <LoginErrors loginErrors={this.state.loginErrors} />
            
          </Col>
        </Row> 
      </Container>
     
    );
  }
}
export default Login;

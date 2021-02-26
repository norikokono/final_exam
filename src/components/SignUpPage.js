import React from 'react';
import {User} from '../requests.js'
import { Form, Button } from "react-bootstrap";

const SignUpPage=(props)=>{
    const {handleSignUp, history}=props;
    function handleSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData=new FormData(currentTarget);
        const signUpParams={
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        User.create(signUpParams).then(res=>{
            console.log(res.id)
            if (res.id){
                console.log(res.id)
                handleSignUp();
                history.push('/auctions')
            }
        })

    }
    return(
        <main>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}></form>
            <Form style={{marginBottom: 30}}>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label class="col-xs-3">First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name"/>
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label class="col-xs-3">Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label class="col-xs-3">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label class="col-xs-3">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPasswordConfirmation">
                    <Form.Label class="col-xs-3">Password Confirmation</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </main>
    )
}
export default SignUpPage;
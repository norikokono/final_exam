import React from 'react';
import { Form, Button } from "react-bootstrap";


const SignInPage =({handleSubmit, history})=>{
    function onSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData= new FormData(currentTarget);
        const formValues={
            email: formData.get('email'),
            password: formData.get('password')
        }
        handleSubmit(formValues);
        history.push('/auctions');

    }
    return(
        <main>
            <h1>Sign In</h1>
            <Form style={{marginBottom: 30}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label class="col-xs-3">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label class="col-xs-3">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </main>
    )
}
export default SignInPage;
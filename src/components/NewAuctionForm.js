import React, {useState} from 'react';
import {Auction} from '../requests';
import FormErrors from './FormErrors';
import { Form, Button } from 'react-bootstrap';

const NewAuctionForm = (props)=>{
    const [errors,setErrors]=useState({});
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            body: formData.get('body')
        }
        createAuction(params);
        event.currentTarget.reset();
    }
    function createAuction(params){
        Auction.create(params)
        .then((auction)=>{
            if(auction.errors){
                console.log('Auction Erros', auction.errors);
                setErrors(auction.errors)
            }
            if(auction.id){
                const id = auction.id;
                props.history.push(`/auctions/${id}`)
            }
        })
    }

    return(
        <div style={{marginBottom: 30}}>
            <h1 style={{background: 'MintCream'}}>Create An Auction</h1>
                <Form onSubmit={event=>handleSubmit(event)}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" onChange={e=>setTitle(e.target.value)} />
                        <FormErrors errors={errors} forField='title'/>
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="description" placeholder="Description" onChange={e=>setDescription(e.target.value)} />
                        <FormErrors errors={errors} forField='description' />
                    </Form.Group>
                    <Form.Group controlId="formDate">
                        <Form.Label>Ends at</Form.Label>
                        <Form.Control type="date" placeholder="Ending Date" />
                    </Form.Group>
                    <Form.Group controlId="formPrice">
                        <Form.Label>Reserve Price</Form.Label>
                        <Form.Control type="price" placeholder="$" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
    )
}
export default NewAuctionForm;
import React from 'react';
import { Form, Button } from 'react-bootstrap'

const AuctionDetails = (props) => {
  const { title, description, user, view_count, created_at, updated_at } = props;


  console.log('Auction Details Re-rendered')
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>By {user ? user.full_name : '' }</p>

      <Form>
        <Form.Group controlId="formBid">
          <Form.Label>Please enter your bidding amount.</Form.Label>
          <Form.Control type="bid" placeholder="$" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Bid
        </Button>
      </Form>

      <p>
        <small>Seen {view_count} times </small> 
        <small>Last edited {updated_at.toLocaleString()}</small>
      </p>
    </div>
  )
}

export default AuctionDetails;

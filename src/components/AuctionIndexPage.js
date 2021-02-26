import React, { Component } from 'react';
import NewAuctionForm from './NewAuctionForm';
import { Auction } from '../requests';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: []
    }
    console.log('Component initialized')
    this.createAuction = this.createAuction.bind(this);
  }

  componentDidMount() {
    Auction.index()
      .then((auctions) => {
        this.setState((state) => {
          return {
            auctions: auctions
          }
        })
      })
  }

  createAuction(params) {
    this.setState((state) => {
      return {
        auctions: [
          ...state.auctions, 
          {
            id: (Math.max(...state.auctions.map(a => a.id)) + 1), 
            ...params
          }
        ]
      }
    })
  }

  deleteAuction(id) {
    this.setState((state) => { 
      return {
        auctions: state.auctions.filter(a => a.id !== id)
      }
    })
  }

  render() {
    console.log('Auction Index Page Rendered')
    return(
      <main>  
        <h1 style={{backgroundColor: 'LightSteelBlue'}}>Auctions</h1>
        {this.state.auctions.map(a => {
          return(
            <Container>
                <Row>
                  <Col/>
                    <Col>
                      <Card border="secondary" style={{ width: '52rem', marginTop: 30, marginBottom: 10}}>
                        <Card.Body>
                        <div key={a.id}>
                          <Link to={`/auctions/${a.id}`}>
                            <h2 style={{color: 'black'}}>{a.id} - {a.title}</h2>
                            <h4 style={{color: 'SlateGray'}}>{a.description}</h4>
                            <h5 style={{color: 'purple'}}>Posted on {a.created_at}</h5>
                          </Link>
                          <Button onClick={() => this.deleteAuction(a.id)} variant="secondary">Delete</Button>
                        </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  <Col/>
              </Row>
            </Container>
          )
        })}
      </main>
    )
  }
}

export default AuctionIndexPage
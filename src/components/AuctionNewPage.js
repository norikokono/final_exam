import React, { Component } from 'react'
import NewAuctionForm from './NewAuctionForm';
import { Auction } from '../requests';

class AuctionNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAuctionData: {
        title: '',
        body: '',
        price: '',
        date: ''
      }
    }
    this.createAuction = this.createAuction.bind(this)
    this.updateAuctionData = this.updateAuctionData.bind(this)
  }

  createAuction() {
    Auction.create(this.state.newAuctionData)
      .then(({ id }) => {
        this.props.history.push(`/auctions/${id}`)
      })
  }

  updateAuctionData(props) { 
    this.setState((state) => {
      console.log(props);
      console.log(state);
      if (state.newAuctionData.title.length > 10) {
        alert('title is too long')
      }
      return {
        newAuctionData: Object.assign(Object.assign({}, state.newAuctionData), props)
      }
    })
  }

  render() {
    return(
      <main>
        <NewAuctionForm 
          createAuction={this.createAuction} 
          newAuctionData={this.state.newAuctionData}
          updateAuctionData={this.updateAuctionData}
        />
      </main>
    )
  }
}

export default AuctionNewPage
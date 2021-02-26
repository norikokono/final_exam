import React, { Component } from 'react'
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import { Auction } from '../requests';
import {Link} from 'react-router-dom';

class AuctionShowPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      auction: {}
    }
    this.deleteBid = this.deleteBid.bind(this)
  }

  componentDidMount() {
    Auction.show(this.props.match.params.id)
      .then(auction => {
        console.log(auction);
        this.setState((state) => {
          return {
            auction: auction
          }
        })
      })
  }

  deleteBid(id) {
    this.setState((state) => {
      return {
        bids: state.bids.filter(b => b.id !== id)
      }
    })
  }

  render() {
    console.log('Auction Show Page Rendered')
    const { title, description, user, view_count, created_at, updated_at, bids } = this.state.auction;
    return(
      <main>
        <AuctionDetails
          title={title}
          description={description}
          user={user}
          view_count={view_count}
          created_at={new Date(created_at)}
          updated_at={new Date(updated_at)}
        />
    
        <Link auction={this.state.auction} to={`/auctions/${this.state.auction.id}/edit`}>Edit</Link>
        <BidList
          bids={bids}
          deleteBid={this.deleteBid}
        />
      </main>
    )
  }
}

export default AuctionShowPage
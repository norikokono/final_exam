import React from 'react';
import BidDetails from './BidDetails';

const BidList = ({ bids, deleteBid }) => {

  return (
    <>
      {bids ? bids.map((b, i) => {
        return <BidDetails 
          key={i}
          id={b.id}
          title={b.title}
          biddr={b.biddr}
          price={b.price}
          created_at={b.created_at}
          deleteBid={deleteBid}
        />
      }) : '' }
    </>
  )
}

export default BidList
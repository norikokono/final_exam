const BidDetails = ({ title, price, biddr, created_at, id, deleteBid }) => {
    return (
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <p>By {biddr ? biddr.first_name : ''} {biddr ? biddr.last_name : ''}</p>
        <p>
          <strong>Created at:</strong> {new Date(created_at).toLocaleString()}
        </p>
        <button onClick={() => deleteBid(id)}>Delete</button>
      </div>
    )
  }
  
  export default BidDetails
  
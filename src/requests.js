const BASE_URL = 'http://localhost:3000/api/v1';

export const Session = {
  create(params) {
    // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
    return fetch(`${BASE_URL}/session`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  },
  currentUser(){
    return fetch(`${BASE_URL}/current_user`,{
      credentials: 'include' // We need to include a session in a request so we can fetch that particular user
    })
    .then((res)=> res.json())
  },
  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: 'Delete',
      credentials: 'include'
    }).then(res => res.json())
  }
}
export const User={
  create(params){
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user:params})
      }
    ).then(res => res.json());
  }
}

export const Auction = {
  index() {
    return fetch(`${BASE_URL}/auctions`)
      .then(res => {
        console.log(res)
        return res.json();
      })
  },
  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  },
  show(id) {
    return fetch(`${BASE_URL}/auctions/${id}`)
      .then(res => res.json())
  }
}

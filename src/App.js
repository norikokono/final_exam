import './App.css';
import { Component } from 'react';
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionDetails from './components/AuctionDetails';
import AuctionNewPage from './components/AuctionNewPage';
import Navbar from './components/Navbar';
import NewAuctionForm from './components/NewAuctionForm'
import SignInPage from './components/SignInPage'
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';
import AuctionEditPage from './components/AuctionEditPage';
import HomePage from './components/HomePage';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { Session } from './requests';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clocksCount: [1],
      user:null
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.destroySession=this.destroySession.bind(this)
    this.handleSignUp=this.handleSignUp.bind(this)
  }

  componentDidMount() {

    Session.currentUser()
    .then(user=>{
      console.log('user', user);
      this.setState((state)=>{
        return {user:user}
      })
    })
  }
  handleSubmit(params){
    // params look like this : {email: 'js@winterfell.gov', password: 'supersecret'}
    Session.create(params).then(()=>{
      return Session.currentUser()}
      ).then(user=>{
        console.log('user', user);
        this.setState((state)=>{
          return {user:user}
        })
      })

  }
  destroySession(){
    Session.destroy()
    .then(res=>{
      this.setState(
          (
          state=>{return {user:null}}
          )
        )
      })
  }
handleSignUp(){
  Session.currentUser().then(user=>{
    this.setState((state)=>{
      return {user:user}
    })
  })

}

  render() {
    return (
      <div className="App">
        <BrowserRouter>            
        <Navbar currentUser={this.state.user} destroySession={this.destroySession}/>
          <Switch>
            <Route exact path='/auctions' component={AuctionIndexPage} />
            <Route exact path='/auctions/detail' isAuth={this.state.user} component={AuctionDetails}/>
            <Route path='/auctions/new' component={NewAuctionForm} />
            <AuthRoute exact path='/auctions/new' isAuth={this.state.user} component={NewAuctionForm}/>
            <AuthRoute exact path='/auctions/:id/edit' isAuth={this.state.user} component={AuctionEditPage}/>
            <Route path='/auctions/:id' component={AuctionShowPage} />
            <Route path='/sign_in'><SignInPage handleSubmit={this.handleSubmit}/></Route>
            <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
            <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSignUp={this.handleSignUp} {...routeProps}/>}/> 
            {/* <Route component={NotFoundPage}/> */}
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
          <div class="container" >
            <img src="images/backgroundImage.jpg" alt="" style={{ marginBottom: 50 }}/>
            <div class="top-left">Going twice. Going once.<br/>Sold to Biddr!</div>
          </div>
      </div>
    );
  }
}



export default App;
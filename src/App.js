import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './login.css';
import './index.css';
import Login from './login'
import {
  withRouter ,  Switch,
  Route,
} from "react-router-dom";
import Loginpass from './commbant/login/loginPass/loginpass';
import Home from './commbant/home/home'
import Main from './commbant/Main/Main';
import NavAPP from './commbant/navbar/navbar';
import Footer from './commbant/Footer/Footer';
import About from './commbant/about/about';
class App extends Component  { 
  constructor(props) {
    super(props);
this.state = {
  user_id : sessionStorage.getItem("USER_ID")
   
}
if(this.state.user_id) {
  this.props.history.push('/')
}else {
  this.props.history.push('/login')
}
}
  render () {
    return (
    
        <div>
          <Switch>
          <Route  path='/login' component={() => <Login/>} />
          <Route  path='/loginpass' component={() => <Loginpass/>} /> 
          <NavAPP/>
              <Route  path='/about' component={() => <About/>} />
              <Route exact path='/' component={() => <Main/>} />
            <Footer/>
          </Switch>
       
          
        </div>
      
        
  
       
    );
  }

}
 
export default withRouter(App);

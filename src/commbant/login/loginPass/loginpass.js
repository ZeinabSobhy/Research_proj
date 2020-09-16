import React , {Component} from "react";
import axios from 'axios';
import '../../../login.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard} from 'mdbreact';
import { withRouter } from "react-router-dom";

class Loginpass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:"",url:"http://172.16.1.102:7070/learnapi/v1/authenticate",redirect:"/"


        }
    }


     handleChange = (event) => {
        this.setState({password:event.target.value})
        console.log(this.state.password)
        console.log(this.props.location.state)
    }
    handleSent = (event) => {
       event.preventDefault();
       const password  = this.state.password;
       axios({
        method: 'post',
        url:this.state.url,
        data:{
            fun_name:"FU_SEC_USER4",
            param_name:["P_USER_NAME", "P_USER_PASSWORD"],
            param_value:[this.props.location.state.username, this.state.password]
        }
      })
      .then(response => {
        sessionStorage.setItem("TOKEN_ID", response.data.Table[0].TOKEN_ID);
        sessionStorage.setItem("USER_ID", response.data.Table[0].USER_ID);
        this.props.history.push(this.state.redirect);

         
        })
      .catch(error => console.error('timeout exceeded'))
    
    }
    render() { 
        return ( 
            
            <MDBContainer>
                    
            <div className="Login">
            <MDBRow>
                <MDBCol md='6' >
                    <MDBCard 
                        className='carrdd'
                        style={{
                             
                            width: '28rem',
                            
                        }}
                    >
                        <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                            <div className='text-center'>
                                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                                    <strong>Welcome</strong>
                                    <a href='#!' className='green-text font-weight-bold'>
                    <strong> {this.props.location.state.full_name}</strong>
                                    </a>
                                </h3>
                            </div>
                            <MDBInput 
                                label='Password'
                                group
                                type='text'
                                validate
                                labelClass='white-text'
                                onChange={this.handleChange}
                            />
                        
                            <div className='md-form pb-3 zeze'>
                                
                            </div>
                            <MDBRow className='d-flex align-items-center mb-4'>
                                <div className='text-center mb-3 col-md-12'>
                                    <MDBBtn
                                        color='success'
                                        rounded
                                        type='button'
                                        className='btn-block z-depth-1'
                                        onClick = {this.handleSent}
                                    >
                                       Submit
                                    </MDBBtn>
                                </div>
                            </MDBRow>
                          
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </div>
        </MDBContainer>
         );
    }
}
 
export default withRouter(Loginpass);
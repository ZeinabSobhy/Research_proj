import React , {Component} from "react";
import axios from 'axios';
import './login.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard} from 'mdbreact';
import { withRouter } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" , url:"http://172.16.1.102:7070/learnapi/v1/authenticate" , redirect:'/loginpass' }

    }

    handleChange = (event) => {
        this.setState({name:event.target.value})
        console.log(this.state.name)
    }
    handleSent = (event) => {
       event.preventDefault();
       const usernamme  = this.state.name;
       axios({
        method: 'post',
        url:this.state.url,
        timeout: 4000,    // 4 seconds timeout
        data:{
            fun_name:"FU_SEC_USER3",
            param_name:["P_USER_NAME"],
            param_value:[usernamme]
        }
      })
      .then(response => {
         if (response.data.Table[0].SEC_STATUS === "doneuser"){
           console.log(response.data)
         let state =  {username : this.state.name , full_name:response.data.Table[0].USER_DESC }
             this.props.history.push(this.state.redirect,state);

         }else {
            alert('zeze')
         }
        
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
                                            <strong>LOG</strong>
                                            <a href='#!' className='green-text font-weight-bold'>
                                                <strong> IN</strong>
                                            </a>
                                        </h3>
                                    </div>
                                    <MDBInput 
                                        label='User Name'
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
                                                Sent
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
        };
         
    }

export default withRouter(Login);
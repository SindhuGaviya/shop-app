import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import {startRegister} from '../actions/register'
import {connect} from 'react-redux'

const formData={
    username:'',
    email:'',
    password:''
}


class Register extends React.Component{
   
    constructor(){
        super()
       this.state=formData
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    
    handleSubmit=(e)=>{
        e.preventDefault()  
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegister(formData,redirect))
    }
    render(){
    return(
        <div>
            <form className="signup-container" onSubmit={this.handleSubmit} >
                <div className='row px-4 vh-100'>
                    <div className='col-md-5 mx-auto align-self-center'>
                {/* username */}
                <div className='form-group input-group'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text'>
                            <i className='fa fa-user'></i>
                        </span>
                    </div>
                    <input 
                    name='username'
                    className='form-control'
                    placeholder='Username'
                    type='text'
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                </div>
                {/* <div className="alert alert-danger" role="alert">{this.state.nameError}</div> */}
                {/* mail */}
                <div className='form-group input-group'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text'>
                            <i className='fa fa-envelope'></i>
                        </span>
                    </div>
                    <input 
                    name='email'
                    className='form-control'
                    placeholder='Email address'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                </div>
                {/* <div style={{fontSize:12,color:'red'}}>{this.state.emailError}</div> */}
                {/* create password */}
                <div className='form-group input-group'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text'>
                            <i className='fa fa-lock'></i>
                        </span>
                    </div>
                    <input 
                    name='password'
                    className='form-control'
                    placeholder='Create Password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary btn-block'>
                        Create Account
                    </button>
                </div>
                {/* already hve an account */}
                <p className='text-center text-white'>
                    Have an account?<Link to='/users/login'>Log in</Link>
                </p>
                </div>
                </div>
            </form>
        </div>
    )
    }
}

export default connect()(Register)
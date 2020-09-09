import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/register'
import {Redirect} from 'react-router-dom'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
             return this.props.history.push('/notes')
        }
        this.props.dispatch(startLogin(formData,redirect))
     
    }
    render(){
        return(
            <div>
               <form className="signup-container" onSubmit={this.handleSubmit} >
                <div className='row px-4 vh-100'>
                    <div className='col-md-5 mx-auto align-self-center'>
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
                        Login
                    </button>
                </div>
                </div>
                </div>
                </form>
            </div>
        )
    }
}

export default connect()(Login)
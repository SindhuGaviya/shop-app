import React from'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Navigation from './components/navigation'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import {connect} from 'react-redux'
import  Account  from './components/Account'
import {startLogout} from './actions/register'


function App(props){
  const handleLogout=()=>{
    props.dispatch(startLogout())
}
    return(
        <BrowserRouter>
        <div className='container'>
            {/* <Navigation/> */}
            <h1> Ecommerce App</h1>

            <Link to="/">Home</Link>
                {
                    Object.keys(props.register).length !== 0 ? (
                        <div>
                            <Link to="/users/account">Account</Link>
                            <Link to="#" onClick={handleLogout}>Logout</Link>
                        </div>
                    ) : (
                            <div>
                                <Link to="/users/register">Register</Link>
                                <Link to="/users/login">Login</Link>
                               
                            </div>
                        )
                }
           
            <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/users/register' component={Register}/>
            <Route path='/users/login' component={Login}/>
            <Route path='/users/account' component={Account}/>

            </Switch>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps=(state)=>{
    return{
       register:state.register
    }
  }

export default connect(mapStateToProps)(App)


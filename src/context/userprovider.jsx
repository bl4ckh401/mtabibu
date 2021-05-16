/*import React, { Component } from 'react'
import { auth  } from "../firebase";
import AuthContext from './AuthContext'

export default class UserProvider extends Component {
    constructor(){
        super(
            this.state = {
                user:""
            }
        )
    componentDidMount = () =>{
        auth.onAuthStateChanged(
            userAuth => {
               const user = await generateUserDocument(userAuth);
                this.setState({user})
            })
         }
    }


    render() {
        return (
            <div>
                <AuthContext.Provider value={this.state.user}>
                    {this.props.children}
                </AuthContext.Provider>
            </div>
        )
    }
}*/

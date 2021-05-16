import React from 'react';
import { auth } from '../firebase';

function signupLogic(email, password){
    return auth.createUserWithEmailAndPassword(email, password)
}
export default signupLogic;
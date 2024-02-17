import {createContext, useContext, useEffect, useState} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged,
     signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { authorizedUser} from '../../firebase.config';
import axios from 'axios';

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [token, setToken] = useState('')
    const [user, setUser] = useState(false)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(authorizedUser, email, password)
    }
    const getToken = (user) => {
        console.log(user)
        user.user.getIdToken().then(console.log).catch(console.error);
    }

    const  signIn = (email, password) => {
        return signInWithEmailAndPassword(authorizedUser, email, password)
        .then(user => {
            // Get the ID token from the user object
            if(user) {
                setUser(true)
                window.localStorage.setItem('user', true)
            }
            user.user.getIdToken().then(idToken => {
                // Send the ID token to the backend
                // You can include it in the headers of the request, like this:
                const headers = {
                  'Authorization': `Bearer ${idToken}`
                };
               
                axios.get('http://localhost:5000/api/protected', { headers});
              });
          })
          .catch(error => {
            console.log(error);
          });
    }

    const logout = () => {
        return signOut(authorizedUser).then(setToken(''))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authorizedUser, (currentUser) => {
            console.log(currentUser, 'user')
            if(currentUser){
                setUser(true)
                window.localStorage.setItem('user', true)
              
                currentUser.getIdToken().then(idToken => {
                    setToken(idToken)
                })
            }
            else {
                setUser(null)
                console.log("user is logged out")
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])
    

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn, token}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}
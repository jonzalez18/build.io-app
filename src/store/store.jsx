import {devtools, persist} from 'zustand/middleware'
import { create } from 'zustand'
import { onAuthStateChanged } from 'firebase/auth'
import { authorizedUser } from '../firebase.config'

export const getUser = async () => {
  let user = ''
    await onAuthStateChanged(authorizedUser, (user1) => {
   
    if (user1) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      user = user1.email;
      
  
    } else {
      // User is signed out
      // ...
     user = null
      console.log("zustand user is not logged in")
    }
    console.log(user1, "getUser")
  });
  console.log(user, "return user")
  return user
}


export const useUser = create((set) => ({
      user:  [],
      addUser: (user) =>
       set((state) => ({
        user: user
      })),
      removeUser: (user) => {
        set((state) => ({
          user: state.user.fiter((u)  => u.email !== user)
        }))
      },
      toggleUserStatus: (user) => {
        set((state) => ({
          user: state.user.toggle.map((user) => ({

          }))
        }))
      }
    })
  )











// import { updateCurrentUser } from 'firebase/auth'
// import { create } from 'zustand'

// export const useStore = create<userFilterState>(set => ({
//     user: '',
//     filter: '',
//     filteredUser: ,
//     selectedUser: null,
//     setFilter: (filter) => 
//   }))

// export type currentUser = {
//   user: string
// }
// export  type userFilterState = {
//   user: string;
//   filter: string;
//   filteredUser: currentUser;
//   selectedUser: currentUser | null
//   setFilter: (string) => void;
// }
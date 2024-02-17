import React, {useEffect, useState} from 'react'
import { userCollection } from "../firebase.config";
import { onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { NewUserType } from "../types/users";
import { useUser } from "../store/store";


const profilesChild = () => {

  const [users, setUsers] = useState<NewUserType[]>([])
    const addUser = useUser((state) => state.addUser)
    const stateUser = useUser((state) => state.user)
  
   useEffect(()  =>  {
      onSnapshot(userCollection,
        (snapshot: QuerySnapshot<DocumentData>) => {
          addUser(snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          }))
          setUsers(snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          }))
        })
    }, [])
  
    console.log(stateUser)


    return (
        
                <div className="flex items-center justify-center space-y-3
                      md:flex-row md:space-y-0 md:space-x-6 md:mb-24 md:justify-end">
                  <div className='grid gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 '>
                      <div className='relative group'>
                          <img  src={stateUser.map(img => img.profileImage)} alt='' className='w-72'></img>
                              <div className='absolute bottom-0 left-0 right-0 p-2 px-4 
                                   text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                   bg-opacity-40'>
                                  <div className='flex justify-between w-full'>
                                      <div className='font-normal'>
                                          <p className='text-sm'>{stateUser.map(name => name.firstName)}</p>
                                          <p className="text-xs">{stateUser.map(name => name.lastName)}</p>
                                      </div>
                                      <div className='flex items-center text-sm'>
                                        {stateUser.map(email => email.email.split('@')[0])} 
                                      </div>
                                  </div>
                              </div>
                      </div>
                  </div>
                </div>
        
    )
}
export default profilesChild
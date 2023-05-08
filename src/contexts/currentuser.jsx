
import { createContext,useState } from "react";

// the actual value that you need to access.
export const UserContext= createContext({
    login:false,
    setlogin:() => null
})
/* current context value, as given by the nearest context provider for the given context. */
export const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null)
    const [login,setlogin] = useState(false)
    const value = {login,currentUser,setCurrentUser,setlogin}


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


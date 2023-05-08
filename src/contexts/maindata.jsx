import { createContext,useState } from "react";

// the actual value that you need to access.
export const DataContext= createContext({
    accounts: null,
    setAccounts:() => null,
    dashboard: null,
    setDashboard:() => null,
    products: null,
    setProducts:() => null,
})
/* current context value, as given by the nearest context provider for the given context. */
export const DataProvider = ({children})=>{
    const [accounts,setAccounts] = useState(null)
    const [dashboard,setDashboard] = useState(null)
    const [products,setProducts] = useState(null)
    const value = {accounts,setAccounts,dashboard,setDashboard,products,setProducts}
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
import { createContext, useContext } from "react";


const AppContext = createContext({
    setShowLogin : (boolean)=>{},
    showLogin : false
});


export const AppContextProvider  = AppContext.Provider;


export const useAppContext = ()=>{
    return useContext(AppContext)
}
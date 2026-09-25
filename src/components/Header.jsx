import {useState,useEffect,createContext,useContext} from 'react'
import {UserContext} from "./UserContext"

    
const Header=(props)=>{
   
    const d=props.d 
    
    
    
    const {prodlikes,setProdlikes,totallikes,setTotallikes}=useContext(UserContext)

    
    

    

    return (<header><h1>Welcome to my page</h1>
                    
                    <h2>Total Likes:{totallikes===0?'':totallikes}</h2>

    </header>)
}

export default Header
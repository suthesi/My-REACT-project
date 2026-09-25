import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import {useState,useReducer} from "react"
import {UserContext} from "../components/UserContext"

let products=[{
    id:"Bed",
    qty:1
    },
    {
        id:"Coke",
        qty:1
    }
    ,{
        id:"Coffee",
        qty:1
    },
    {
        id:"Curtains",
        qty:1
    },
    {
        id:"Jacket",
        qty:1
    },
    {
        id:"Jeans",
        qty:1
    }]

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return state.map((product) => {
                if (String(product.id) === String(action.id)) {
                    return { ...product, qty: product.qty + 1 }
                } else {
                    return product
                }
            })

        case "DECREASE":
            return state.map((product) => {
                if (String(product.id) === String(action.id)) {

                    // prevent going below 1
                    if (product.qty > 0) {
                        return { ...product, qty: product.qty - 1 }
                    } else {
                        return product
                    }

                } else {
                    return product
                }
            })

        default:
            return state
    }
}






const MyLayOut=()=>{


const[quantity,dispatch]=useReducer(reducer,products)

const[prodlikes,setProdlikes]=useState(new Map())
const[totallikes,setTotallikes]=useState(0)
return (
<UserContext.Provider value={{prodlikes,setProdlikes,totallikes,setTotallikes,quantity,dispatch}}>
<Header d={new Date()}/>
<NavBar/>

<Outlet/>
</UserContext.Provider>)


}

export default MyLayOut 
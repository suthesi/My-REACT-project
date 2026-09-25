import {FaRupeeSign} from 'react-icons/fa'
import{FaHeart,FaPlus,FaMinus} from 'react-icons/fa'
import{useState,useEffect,createContext,useContext} from 'react'
import { UserContext } from './UserContext'

let marginR={color:"red"}



let likesSpan={marginLeft:"7px"}



const Product=(props)=>{
     var style={float:"left",marginLeft:"3px"}
     var hearts={float:"left",marginLeft:"10px"}

    var qtyStyle={float:"left",marginRight:"10px",width:"80px",textAlign:"center"}
    var qtySpan={float:"none",width:"30px",margin:"auto",textAlign:"center"}

    
    const{prodlikes,setProdlikes,totallikes,setTotallikes,quantity,dispatch}=useContext(UserContext)
    let pos=0
    let product=props.name
    for(let k in quantity)
    {
        if(String(quantity[k].id)===String(product))
        {
            pos=k 
            break
        }

    }
    const handleIncrease=(ps)=>{
        dispatch({type:"INCREASE",id:ps.id})
    }

    const handleDecrease=(ps)=>{
        dispatch({type:"DECREASE",id:ps.id})
    }

    function handleLikes()
    {
    
        let currentlikes=prodlikes.get(props.name)
        if(String(currentlikes)==="undefined")
        {
            prodlikes.set(props.name,1)
        }
        else
        {
            prodlikes.set(props.name,prodlikes.get(props.name)+1)
        }

        setTotallikes((prev)=>prev+1)
    }
    

return(<div>
    <h1>{props.name}</h1>
    <img src={props.image}/>
    <hr/>
    <span><FaRupeeSign style={marginR}/>{props.price}</span><FaHeart onClick={()=>handleLikes()} style={hearts}/><span style={likesSpan}>{String(prodlikes.get(props.name))==="undefined"?'':prodlikes.get(props.name)}</span><span style={qtyStyle}><FaPlus onClick={()=>handleIncrease(quantity[pos])} style={{float:"left",marginLeft:"5px"}}/><span style={qtySpan}>{quantity[pos].qty}</span><FaMinus onClick={()=>handleDecrease(quantity[pos])} style={{float:"right",marginRight:"5px"}}/></span><button>Add</button>
</div>)

}

export default Product
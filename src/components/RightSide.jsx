import { useState } from "react"
import {FaApple} from "react-icons/fa"


const RightSide=()=>{



const[showFullDescription,setShowFullDescription]=useState(false)

let description="Rising South Australian star Liam Scott has been crowned the Sheffield Shield player of the season for 2025-26.Already on the national selectors radar after representing Australia A last year, Scott produced his career-best Shield season with both bat and ball to win the award by one vote from Victoria Mitch Perry."
description+="Earmarked as a future leader of South Australian cricket by his Adelaide Strikers coach Tim Paine, Scott finished the regular season with 496 runs and 23 wickets from nine matches to help his state qualify for consecutive Sheffield Shield finals."

if(!showFullDescription)
{
    description=description.substring(0,90)+"..."
}

let mySpanStyle={
    float:"right",
    marginRight:"30px",
    color:"red"
}

let appleStyle={marginRight:"10px"}

return (<div id="main">
<p>{description}</p>

<button onClick={()=>setShowFullDescription((prevState)=>!prevState)}>{!showFullDescription?"more":"less"}</button><span style={mySpanStyle}><FaApple style={appleStyle} />Georgia</span>
</div>)

}

export default RightSide
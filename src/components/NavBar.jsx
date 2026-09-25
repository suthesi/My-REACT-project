import {NavLink} from "react-router-dom"

const NavBar=()=>{

var styles={
    borderLeft:"2px solid white"
}    

let paddingTop={paddingTop:"12px",width:"100%",height:"46px",textAlign:"center",boxSizing:"border-box",display:"inline-block"}

let navStyle=({isActive})=>isActive?'navStyle':''

return (<nav>
    <ul>
        <li style={styles}><NavLink to="/homeAppl" style={paddingTop} className={navStyle}>HOME APPL</NavLink></li>
        <li><NavLink to="/mens" style={paddingTop} className={navStyle} >MEN'S WEAR</NavLink></li>
        <li><NavLink to="/womens" style={paddingTop} className={navStyle}>WOMEN'S WEAR</NavLink></li>
        <li><NavLink to="/books"style={paddingTop}className={navStyle}>BOOKS</NavLink></li>
    </ul>
</nav>)


}

export default NavBar
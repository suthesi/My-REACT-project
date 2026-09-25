import Product from '../components/Product'
import Bed from '../assets/images/Bed.WEBP'
import washing from '../assets/images/washing.jpg'
import air from '../assets/images/air.jpg'
import Curtains from '../assets/images/Curtains.WEBP'

const HomeAppl=()=>{
return (<div id="wrapper">
    <div id="container">
<Product name="Bed" image={Bed} price="3000"/>
<Product name="Curtains" image={Curtains} price="1500"/>
<Product name="mashing machine" image={washing} price="15000"/>
<Product name="Air fryer" image={air} price="5000"/>
</div>
</div>)



}

export default HomeAppl
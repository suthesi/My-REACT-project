import jeans from '../assets/images/jeans.jpg'
import jacket from '../assets/images/Jacket.jpg'
import polo from'../assets/images/polo.jpg'
import shoes from '../assets/images/shoes.jpg'
import Product from '../components/Product'

const Mens=()=>{


return (<div id="wrapper">
    <div id="container">

    <Product name="Jeans" image={jeans} price="800"/>
    <Product name="Jacket" image={jacket} price="900"/>
    <Product name="Tshirt" image={polo} price="599"/>
    <Product name="Shoes" image={shoes} price="499"/>


    </div>
</div>)

}

export default Mens



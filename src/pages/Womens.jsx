import sleeves from '../assets/images/sleeves.jpg'
import watch from '../assets/images/watch.jpg'
import bag from '../assets/images/bag.webp'
import Set from '../assets/images/set.jpg'
import Product from '../components/Product'

const Womens=()=>{


return (<div id="wrapper">
    <div id="container">

    <Product name="sleeves" image={sleeves} price="1000"/>
    <Product name="watch" image={watch} price="1200"/>
    <Product name="bag" image={bag} price="299"/>
    <Product name="winter set" image={Set} price="1500"/>


    </div>
</div>)

}

export default Womens

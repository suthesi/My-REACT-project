import nancy from'../assets/images/nancy.jpg'
import power from '../assets/images/power.jpeg'
import powerless from '../assets/images/powerless.jpeg'
import spells from '../assets/images/spells.jpeg'
import Product from '../components/Product'

const Books=()=>{


return (<div id="wrapper">
    <div id="container">

    <Product name="nancy" image={nancy} price="200"/>
    <Product name="power" image={power} price="300"/>
    <Product name="powerless" image={powerless} price="499"/>
    <Product name="spells" image={spells} price="999"/>
    

    </div>
</div>)

}

export default Books
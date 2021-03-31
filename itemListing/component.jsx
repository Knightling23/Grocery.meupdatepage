import { itemDB } from '../LocalDB/itemDB';
import star from './assets/yellowstar.png'

export const ItemListing = ({ itemID, toProductPage, addToCart }) => {

    return <div>
        <img className="itemImage" src={itemDB.images[itemID]} alt={itemDB.names[itemID]} onClick={() => toProductPage(itemID)}/>
        <div className="itemWrapper">
            <button className="itemNameText" onClick={() => toProductPage(itemID)}>{itemDB.names[itemID]}</button>

            <div className="itemButtonRow">

                <button className="faviconbutton "><img src={star} className ="favoriteicon"/></button>
                <button className="itemText" onClick={() => toProductPage(itemID)}>{itemDB.minMaxPrices[itemID]}</button>
                <button className="itemButton" onClick={() => addToCart(itemID)}> <b> Add to cart </b> </button>

            </div>
        </div>
    </div>


}




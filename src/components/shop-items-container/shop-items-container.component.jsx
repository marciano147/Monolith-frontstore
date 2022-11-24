import React, { useState, useEffect } from "react";
import axios from 'axios';
import ShopItem from "../shop-item/shop-item.component";
import "./ShopItemsContainer.scss"
import Header from "../header/header.component";
import ProductsTitle from "../products-title/products-title.component";


const ShopItemsContainer = () => {
    const [shoppingItems, setShoppingItems] = useState([]);

    useEffect(() => {
        axios
            .get('https://fedtest.monolith.co.il/api/catalog/getAll')
            .then(res => setShoppingItems(res.data.data))
            .then(shoppingItems.map(item => console.log(item)))
        
    }, [])
    
    return(
       <div>
        <Header/>
            <ProductsTitle/>
                <div className="container">
        
                    {shoppingItems.map(item => 
                        <ShopItem id={item.id} maxPrice={item.max_price} Tittle={item.title} minPrice={item.min_price} imageURL={`https://fedtest.monolith.co.il/api/imager.php?url=${item.images[0].url}&type=fit&width=1000&height=1000&quality=70`}  />
                      )}
                </div>
         </div>
    )
    
   
} 

export default ShopItemsContainer;
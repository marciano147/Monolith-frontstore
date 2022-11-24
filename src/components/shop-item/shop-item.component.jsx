import React from "react";
import "./ShopItem.scss"
import { Link } from "react-router-dom";

const ShopItem = ({maxPrice ,minPrice, imageURL, Tittle, id }) => ( 
   <Link to={`/products/${id}`}>
      <div className="Shopping-item-container">
        <img className="Homepage-image" src={imageURL} alt="Product Image"/>
          <div className="Tittle">{Tittle}</div>
              {(() => {
                if (maxPrice===minPrice) {
                  return (
                    <div className="Pricetag">{minPrice}$</div>
                    )
                    } else {
                   return (
                    <div className="Pricetag">{minPrice}$-{maxPrice}$</div>
                    )
                   }
              })()}
      </div>
  </Link>
)

export default ShopItem;

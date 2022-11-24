import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductPage.scss"
import ProducImages from "./product-image/Product-image.component"; 
import Dropdown from 'react-bootstrap/Dropdown';
import { useParams } from "react-router-dom";
import Header from "../header/header.component";
import AddToCart from "../add-to-cart/add-to-cart.component";


const ProductPage = () => {
  const [productDetails, setProductDetails] = useState({});
  const [currentVariants, setCurrentVariants]  = useState([]);
  const initialVariants = [];
  if (productDetails.variants && currentVariants.length === 0 ) {
        productDetails.variants.forEach(variant => {
        const res = {}
        variant.labels.forEach(label => {
        
          res[label.attribute_id] = label.label_id
       })
        initialVariants.push(res)
    })
      setCurrentVariants(initialVariants)
  }

  const handleSelection = (selectedOps) => {
    const newVariants = currentVariants.filter((combo)=> combo[selectedOps.attribute_id] === selectedOps.label_id.toString())
    setCurrentVariants(newVariants)
  }
  
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`https://fedtest.monolith.co.il/api/catalog/get?id=${id}`)
      .then(res => setProductDetails(res.data.data))
   }, [])
  
  return ( 
    productDetails.images ?
    <div>
      <Header/>
        <div className="Product-page">
            <ProducImages images={productDetails.images}/>
              <div className="Text">
                <div className="Title">{productDetails.title} </div>
                  <div className="Description">{productDetails.description} </div>
                    {(() => {
                      if (productDetails.max_price===productDetails.min_price) {
                         return (
                          <div className="Price">{productDetails.min_price}$</div>
                          )   
                      } else {
                         return (
                          <div className="Price">{productDetails.min_price}$-{productDetails.max_price}$</div>
                         )
                      }
                     })()}
        
                  <div className="dropdown-container">
                    {productDetails.attributes.map(item => 
                      <Dropdown>
                        <Dropdown.Toggle style={{backgroungColor: 'rgb(160, 112, 205)'}} variant="success" id="dropdown-basic">
                        { item.title}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                       
                         {item.labels.filter((el) => currentVariants.map(variant => variant[item.id]).includes(el.id)).map((label) => 
                          <Dropdown.Item onClick={() => handleSelection({ attribute_id: item.id, label_id: label.id})}  style={{backgroungColor: 'white'}} variant="success" id="dropdown-basic"> 
                            { label.title}
                          </Dropdown.Item>
                          
                       )} 
                        </Dropdown.Menu>
                     </Dropdown>
                    )}
                  </div>
                    <button  className="button-reset" onClick={() => setCurrentVariants(initialVariants) }>
                      RESET FILTERS
                    </button>
                    <AddToCart/>
              </div>
          </div>
      </div>
          
          :
          <div>Loading</div>
          
          )
        }
        
        
        
        export default ProductPage
        

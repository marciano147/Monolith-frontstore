import React, {useState} from "react";
import "./ProductImage.scss"

const ProducImages = ({ images }) =>{
    const [selectedImage, setSelectedImage] = useState(images[0].url)
    return (
        <div className="Image-container">
            <img className="Main-image" src={`https://fedtest.monolith.co.il/api/imager.php?url=${selectedImage}&type=fit&width=1000&height=1000&quality=70`} alt="Product Image"/>
                <div className="Variant-images">
                    {
                        images.map(item => 
                            <img className="Variant" src={`https://fedtest.monolith.co.il/api/imager.php?url=${item.url}&type=fit&width=1000&height=1000&quality=70`} onClick={()=> setSelectedImage(item.url)} />
                        )
                    }
                </div>

        </div>  
    )
}
export default ProducImages;

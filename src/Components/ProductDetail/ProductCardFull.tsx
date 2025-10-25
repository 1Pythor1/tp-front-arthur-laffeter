import type { Product } from "../../Core/Data/Product";
import './ProductCardFull.css'

export function ProductCardFull(product: Product) {
    return (        
            <div className="product-card-full" key={product.id}>
                <div id="product-card-info">                    
                    <img src={product.image[0]} alt={product.description}/>
                    <h2>Infos</h2>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>                
                <div id="product-card-details">
                    <h2>Details</h2>
                    <p>Rate: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Title: {product.title}</p>
                    <p>Etc..</p>
                </div>                
            </div>        
    );
}
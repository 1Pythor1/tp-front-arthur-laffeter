import { Link } from "react-router-dom";
import './ProductCardShort.css'
import type { Product } from "../../Core/Data/Product";
import { PRODUCT_ROUTE } from "../../Core/constantes";

export function ProductCardShort(product: Product) {
    return (
        <Link key={product.id} to={`/${PRODUCT_ROUTE}/${product.id}`}>
            <div className="product-card" key={product.id}>                
                <img src={product.image[0]} alt={product.description}/>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <p>{product.image}</p>
            </div>    
        </Link>    
    );
}
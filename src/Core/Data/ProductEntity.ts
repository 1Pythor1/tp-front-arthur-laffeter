import type { IEntity } from "../Interfaces/IEntity";
import { Product } from "./Product"

export class ProductEntity implements IEntity<Product>{
    _id: number;
    _title: string;
    _decription: string;
    _category: string;
    _price: number;
    _rating: number;
    _stock: number;
    _image: string[];

    constructor(
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        rating: number,
        stock: number,
        image: string[]
    ){
        this._id = id;
        this._title = title;
        this._decription = description;
        this._category = category;
        this._price = price;
        this._rating = rating;
        this._stock = stock;
        this._image = image;
    }
    

    toData(): Product {
        return new Product(
            this._id,
            this._title,
            this._decription,
            this._category,
            this._price,
            this._rating,
            this._stock,
            this._image);
    }
}
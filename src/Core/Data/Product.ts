
export class Product{
    private _id: number;
    private _title: string;
    private _decription: string;
    private _category: string;
    private _price: number;
    private _rating: number;
    private _stock: number;
    private _image: string[];

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
    get id(): number{
        return this._id
    }
    get title(): string{
        return this._title
    }
    get description(): string{
        return this._decription
    }
    get category(): string{
        return this._category
    }
    get price(): number{
        return this._price
    }
    get rating(): number{
        return this._rating
    }
    get stock(): number{
        return this._stock
    }
    get image(): string[]{
        return this._image
    }

}
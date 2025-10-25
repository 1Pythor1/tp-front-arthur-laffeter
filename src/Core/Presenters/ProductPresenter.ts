import type { IDataInteractor } from "../Interfaces/IDataInteractor"
import type { Product } from "../Data/Product"
import type { ProductEntity } from "../Data/ProductEntity"

import { BasePresenter } from "./BasePresenter";

export class ProductPresenter extends BasePresenter<Product>{
    constructor(dataInteractor: IDataInteractor<ProductEntity>){
        super(dataInteractor)
    }     
}
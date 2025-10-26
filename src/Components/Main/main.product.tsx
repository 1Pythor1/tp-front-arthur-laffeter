import { Product } from '../../Core/Data/Product.ts'
import { ProductPresenter } from '../../Core/Presenters/ProductPresenter.ts'
import { DummyJsonProductInteractor } from '../../Core/ApiInteractors/DummyJsonProductInteractor.ts'
import { Singelton } from "../../Core/Utils/Singelton.ts"
import { Renderer } from '../../Renderer.tsx'
import { ProductCardShort } from '../ProductCard/ProductCardShort.tsx'
import { ProductCardFull } from '../ProductDetail/ProductCardFull.tsx'

import { main } from "./Main.tsx"
import { PRODUCT_ROUTE } from '../../Core/constantes.ts'


const renderer: Singelton<Renderer<Product>> = Singelton.getInstance(
    new Renderer<Product>(new ProductPresenter(new DummyJsonProductInteractor()),
     ProductCardShort,
    ProductCardFull));

main(renderer.instance!, PRODUCT_ROUTE)
import { URL_DUMMY_JSON_PRODUCTS } from "../constantes";
import { ProductEntity } from "../Data/ProductEntity";
import type { IDataInteractor } from "../Interfaces/IDataInteractor"

export  class DummyJsonProductInteractor implements IDataInteractor<ProductEntity>{
    
    private async _fetchUsers(url: string) {
    try {
      
      const res = await fetch(url);
      const data = await res.json();
      
      return data;

    } catch (error) {
      console.error('Erreur:', error);
    }
  }
    async getSingleData(id: number): Promise<ProductEntity> {        
        const rawData = await this._fetchUsers(`${URL_DUMMY_JSON_PRODUCTS}/${id}`);        

        return new ProductEntity(
            rawData.id,
            rawData.title,
            rawData.description,
            rawData.category,
            rawData.price,
            rawData.rating,
            rawData.stock,
            rawData.images
        );
    }
    
    async getDataList(): Promise<ProductEntity[]> {
        const rawData = (await this._fetchUsers(URL_DUMMY_JSON_PRODUCTS)).products;
        
        return rawData.map((item: any) => new ProductEntity(
            item.id,
            item.title,
            item.description,
            item.category,
            item.price,
            item.rating,
            item.stock,
            item.images
        ));
    }
}
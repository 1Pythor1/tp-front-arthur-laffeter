import { URL_DUMMY_JSON_USERS } from "../constantes";
import { UserEntity } from "../Data/UserEntity";
import type { IDataInteractor } from "../Interfaces/IDataInteractor"

export  class DummyJsonUserInteractor implements IDataInteractor<UserEntity>{
    
    private async _fetchUsers(url: string) {
    try {
      
      const res = await fetch(url);
      const data = await res.json();
      
      return data;

    } catch (error) {
      console.error('Erreur:', error);
    }
  }
    async getSingleData(id: number): Promise<UserEntity> {        
        const rawData = await this._fetchUsers(`${URL_DUMMY_JSON_USERS}/${id}`);        

        return new UserEntity(
            rawData.id,
            rawData.firstName,
            rawData.lastName,
            rawData.maidenName,
            rawData.age,
            rawData.gender,
            rawData.email,
            rawData.phone,
            rawData.username,
            rawData.birthDate,
            rawData.image
        );
    }
    
    async getDataList(): Promise<UserEntity[]> {
        const rawData = (await this._fetchUsers(URL_DUMMY_JSON_USERS)).users;
        
        return rawData.map((item: any) => new UserEntity(
            item.id,
            item.firstName,
            item.lastName,
            item.maidenName,
            item.age,
            item.gender,
            item.email,
            item.phone,
            item.username,
            item.birthDate,
            item.image
        ));
    }
}
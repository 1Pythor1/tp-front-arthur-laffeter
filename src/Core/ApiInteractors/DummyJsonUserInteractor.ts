import { URL_DUMMY_JSON_USERS } from "../constantes";
import { UserEntity } from "../Data/UserEntity";
import type { IDataInteractor } from "../Interfaces/IDataInteractor"

export  class DummyJsonUserInteractor implements IDataInteractor<UserEntity>{
    
    private async _fetchUsers() {
    try {
      
      const res = await fetch(URL_DUMMY_JSON_USERS);
      const data = await res.json();
      
      return data.users;

    } catch (error) {
      console.error('Erreur:', error);
    }
  }
    
    async getData(): Promise<UserEntity[]> {
        const rawData = await this._fetchUsers();
        
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
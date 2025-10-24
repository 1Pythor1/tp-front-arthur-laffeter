import { MALE } from "../constantes";
import { UserEntity } from "../Data/UserEntity";
import type { IDataInteractor } from "../Interfaces/IDataInteractor"

export  class DummyJsonUserInteractorFake implements IDataInteractor<UserEntity>{
    public getSingleData(): Promise<UserEntity> {
        return Promise.resolve(
            new UserEntity(1, "fake", "fake", "fake", 99, MALE, "fake@fake.lol", "01 11 11 11 11", "Faker", "2000-1-1", "https://news.vocofm.com/wp-content/uploads/2023/11/faker-1024x760.jpg")
            
        );
    }
    public getDataList(): Promise<UserEntity[]> {
        return Promise.resolve([
            new UserEntity(1, "fake", "fake", "fake", 99, MALE, "fake@fake.lol", "01 11 11 11 11", "Faker", "2000-1-1", "https://news.vocofm.com/wp-content/uploads/2023/11/faker-1024x760.jpg")
            
        ]);
    }
}
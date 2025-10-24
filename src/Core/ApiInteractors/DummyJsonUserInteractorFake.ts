import { MALE } from "../constantes";
import { UserEntity } from "../Data/UserEntity";
import type { IDataInteractor } from "../Interfaces/IDataInteractor"
import {delay} from "../Utils/delay.ts";

export  class DummyJsonUserInteractorFake implements IDataInteractor<UserEntity>{
    private _data: UserEntity[] = [
            new UserEntity(1, "Faker", "fake", "fake", 99, MALE, "fake@fake.lol", "01 11 11 11 11", "Faker", "2000-1-1", "https://news.vocofm.com/wp-content/uploads/2023/11/faker-1024x760.jpg"),
            new UserEntity(2, "Keria", "fake", "fake", 99, MALE, "fake@fake.lol", "01 11 11 11 11", "Faker", "2000-1-1", "https://www.team-aaa.com/upload/media/post_image/0001/08/d1095671afe8022c1e3e60e6107086344e649523.jpeg"),
            new UserEntity(3, "Gumayusi", "fake", "fake", 99, MALE, "fake@fake.lol", "01 11 11 11 11", "Faker", "2000-1-1", "https://preview.redd.it/before-the-madness-appreciation-post-for-gumayusi-s-strength-v0-yg9vz9ew417f1.jpeg?width=640&crop=smart&auto=webp&s=c7c6ed8d2c501b76e18d5f0119a31ecba2bdcdff"),
            new UserEntity(4, "Owner", "fake", "fake", 99, MALE, "fake@fake.lol", "01 11 11 11 11", "Faker", "2000-1-1", "https://cdn.oneesports.gg/cdn-data/2022/06/LeagueOfLegends_2022_LCK_SummerSplit_Week2_T1_Oner.jpg"),
            new UserEntity(5, "Zeus", "fake", "fake", 99, MALE, "fake@fake.lol", "01 11 11 11 11", "Faker", "2000-1-1", "https://www.team-aaa.com/upload/media/post_image/0001/13/36453b9b1f208f3c3017603739790720e600bb0f.jpeg"),            
        ];

    public async getSingleData(id: number): Promise<UserEntity> {
        await delay(1000);
        return Promise.resolve(
            this._data[id - 1] //this._data.find(user => user.id === id)!
            
        );
    }
    public async getDataList(): Promise<UserEntity[]> {
        await delay(1000);
        return Promise.resolve(this._data);
    }
}
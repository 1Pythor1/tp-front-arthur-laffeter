import type { IDataInteractor } from "../Interfaces/IDataInteractor"
import type { IPresenter } from "../Interfaces/IPresenter"
import type { User } from "../Data/User"
import type { UserEntity } from "../Data/UserEntity"

export class UserPresenter implements IPresenter<User>{
    _dataInteractor: IDataInteractor<UserEntity>;

    constructor(dataInteractor: IDataInteractor<UserEntity>){
        this._dataInteractor = dataInteractor
    }

    async getSingleData(id: number): Promise<User> {
        return ((await this._dataInteractor.getSingleData(id))).toUser();
    }

    async getDataList(): Promise<User[]> {
        return (await this._dataInteractor.getDataList()).map(productEntity => productEntity.toUser());
    }
}
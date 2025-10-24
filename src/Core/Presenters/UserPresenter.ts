import type { IDataInteractor } from "../Interfaces/IDataInteractor"
import type { IPresenter } from "../Interfaces/IPresenter"
import type { User } from "../Data/User"
import type { UserEntity } from "../Data/UserEntity"

export class UserPresenter implements IPresenter<User>{
    _dataInteractor: IDataInteractor<UserEntity>;

    constructor(dataInteractor: IDataInteractor<UserEntity>){
        this._dataInteractor = dataInteractor
    }

    async getData(): Promise<User[]> {
        return (await this._dataInteractor.getData()).map(productEntity => productEntity.toUser());
    }
}
import type { IDataInteractor } from "../Interfaces/IDataInteractor"
import type { User } from "../Data/User"
import type { UserEntity } from "../Data/UserEntity"

import { BasePresenter } from "./BasePresenter";

export class UserPresenter extends BasePresenter<User>{
    constructor(dataInteractor: IDataInteractor<UserEntity>){
        super(dataInteractor)
    }     
}
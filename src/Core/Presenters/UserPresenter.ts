import type { IDataInteractor } from "../Interfaces/IDataInteractor"
import type { IPresenter } from "../Interfaces/IPresenter"
import type { User } from "../Data/User"
import type { UserEntity } from "../Data/UserEntity"

export class UserPresenter implements IPresenter<User>{
    private _dataInteractor: IDataInteractor<UserEntity>;
    private _dataList: User[];

    constructor(dataInteractor: IDataInteractor<UserEntity>){
        this._dataInteractor = dataInteractor
        this._dataList = [];
    }

    private async loadDataList(): Promise<void>{
        if(this._dataList.length === 0){
            this._dataList = (await this._dataInteractor.getDataList()).map(entity => entity.toUser());            
        }
    }

    public async getDataList(): Promise<User[]>{
        await this.loadDataList();
        return this._dataList;
    }
    public async getSingleData(id: number): Promise<User>{
        await this.loadDataList();
        return this._dataList.find((user: User) => user.id === id)!;
    }
    public async getFilteredData(field: string, value: string): Promise<User[]>{
        await this.loadDataList();        
        
        return this._dataList.filter((user: User) => user[field as keyof User]?.toString().toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }

     
}
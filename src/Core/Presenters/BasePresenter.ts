import type { IDataInteractor } from "../Interfaces/IDataInteractor"
import type { IEntity } from "../Interfaces/IEntity";
import type { IPresenter } from "../Interfaces/IPresenter"

export class BasePresenter<TData> implements IPresenter<TData>{
    protected _dataInteractor: IDataInteractor<IEntity<TData>>;
    protected _dataList: TData[];

    constructor(dataInteractor: IDataInteractor<IEntity<TData>>){
        this._dataInteractor = dataInteractor
        this._dataList = [];
    }

    protected async loadDataList(): Promise<void>{
        if(this._dataList.length === 0){
            this._dataList = (await this._dataInteractor.getDataList()).map(entity => entity.toData());            
        }
    }

    public async getDataList(): Promise<TData[]>{
        await this.loadDataList();
        return this._dataList;
    }
    public async getSingleData(id: number): Promise<TData>{
        await this.loadDataList();
        return this._dataList.find((user: TData) => user["id" as keyof TData] === id)!;
    }
    public async getFilteredData(field: string, value: string): Promise<TData[]>{
        await this.loadDataList();        
        
        return this._dataList.filter((user: TData) => user[field as keyof TData]?.toString().toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    }

     
}
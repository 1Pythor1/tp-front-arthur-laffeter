export interface IDataInteractor<IEntity>{
    getDataList(): Promise<IEntity[]>;
    getSingleData(id: number): Promise<IEntity>;
}
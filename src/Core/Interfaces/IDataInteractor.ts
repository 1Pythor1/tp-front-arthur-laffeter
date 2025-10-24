export interface IDataInteractor<TData>{
    getDataList(): Promise<TData[]>;
    getSingleData(id: number): Promise<TData>;
}
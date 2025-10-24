export interface IDataInteractor<TData>{
    getData(): Promise<TData[]>;
}
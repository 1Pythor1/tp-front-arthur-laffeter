export interface IPresenter<TData>{
    getDataList(): Promise<TData[]>;
    getSingleData(id: number): Promise<TData>;
}

    
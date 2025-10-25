export interface IPresenter<TData>{
    getDataList(): Promise<TData[]>;
    getSingleData(id: number): Promise<TData>;
    getFilteredData(field: string, value: string): Promise<TData[]>
}

    
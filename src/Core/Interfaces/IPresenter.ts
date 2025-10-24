export interface IPresenter<TData>{
    getData(): Promise<TData[]>;
}

    
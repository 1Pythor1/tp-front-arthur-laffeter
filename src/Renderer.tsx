import type { IPresenter } from "./Core/Interfaces/IPresenter";
import type { JSX } from 'react';
import type { IRender } from "./Interfaces/IRender";
import { ErrorNotFound } from "./Components/Error/NotFound"

export class Renderer<TData extends object> implements IRender {
    private readonly _presenter: IPresenter<TData>;
    private readonly _renderShortFunction: (data: TData) => JSX.Element;
    private readonly _renderFullFunction: (data: TData) => JSX.Element;

    constructor(
        presenter: IPresenter<TData>, 
        renderShortFunction: (data: TData) => JSX.Element,
        renderFullFunction: (data: TData) => JSX.Element
    ) {
        this._presenter = presenter;
        this._renderShortFunction = renderShortFunction;
        this._renderFullFunction = renderFullFunction;
    }
    private applyShortRender(dataList: TData[], index: number, step: number): JSX.Element[]{
        const start: number = index * step + step;
        return dataList.slice(start, start + step).map((item) => this._renderShortFunction(item))
    }

    private errorHandler(func: () => JSX.Element[]): JSX.Element{
        let elt: JSX.Element;
        try{
            elt = 
            <>
                {func()}
            </>;
            
        }catch(err){
            elt = <ErrorNotFound/>;
        }
        return elt;
    }

    public async renderAll(index: number, step: number): Promise<JSX.Element> {
        const data = await this._presenter.getDataList();
        
        return this.errorHandler(() => this.applyShortRender(data, index, step));
        
    }

    public async renderSingle(id: number): Promise<JSX.Element> {
        const data = await this._presenter.getSingleData(id);
        return this.errorHandler(() => [this._renderFullFunction(data)]);
    }

    public async renderAllFilterd(field: string, value: string, index: number, step: number): Promise<JSX.Element> {        
        const data = await this._presenter.getFilteredData(field, value);        
        return this.errorHandler(() => this.applyShortRender(data, index, step))
    }

    public async getDataFieldList(): Promise<string[]> {
        return Object.keys((await this._presenter.getDataList())[0]);
    }

    public async getNumberOfData(isFiltered: boolean = false, field: string | null = null, value: string | null = null): Promise<number>{        
        return (
            isFiltered
            ? await this._presenter.getFilteredData(field!, value!)
            : await this._presenter.getDataList()
        ).length
    }
}
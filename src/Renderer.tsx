import type { IPresenter } from "./Core/Interfaces/IPresenter";
import type { JSX } from 'react';
import type { IRender } from "./Interfaces/IRender";

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

    public async renderAll(): Promise<JSX.Element> {
        const data = await this._presenter.getDataList();
        return (
            <>
                {data.map((item) => this._renderShortFunction(item))}
            </>
        )
    }

    public async renderSingle(id: number): Promise<JSX.Element> {
        const data = await this._presenter.getSingleData(id);
        return (
            <>
                {this._renderFullFunction(data)}
            </>
        )
    }

    public async renderAllFilterd(field: string, value: string): Promise<JSX.Element> {
        console.log(field, value);
        const data = await this._presenter.getFilteredData(field, value);
        //console.log(data);
        return (
            <>                
                {data.map((item) => this._renderShortFunction(item))}
            </>
        )
    }

    public async getDataFieldList(): Promise<string[]> {
        return Object.keys((await this._presenter.getDataList())[0]);
    }
}
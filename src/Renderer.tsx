import type { IPresenter } from "./Core/Interfaces/IPresenter";
import type { JSX } from 'react';
import type { IRender } from "./Interfaces/IRender";

export class Renderer<TData> implements IRender {
    private _presenter: IPresenter<TData>;
    private _renderFunction: (data: TData) => JSX.Element;

    constructor(presenter: IPresenter<TData>, renderFunction: (data: TData) => JSX.Element) {
        this._presenter = presenter;
        this._renderFunction = renderFunction;
    }

    public async getData(): Promise<TData[]> {
        return this._presenter.getData();
    }

    public async render(): Promise<JSX.Element> {
        const data = await this._presenter.getData();
        return (
            <>
                {data.map((item) => this._renderFunction(item))}
            </>
        )
    }
}
import type { JSX } from 'react';


export interface IRender{
    renderAll(index: number, step: number): Promise<JSX.Element>;
    renderSingle(id: number): Promise<JSX.Element>;
    renderAllFilterd(field: string, value: string, index: number, step: number): Promise<JSX.Element>
    
    getDataFieldList(): Promise<string[]>;
    getNumberOfData(isFiltered?: boolean, field?: string | null, value?: string | null): Promise<number>;
}
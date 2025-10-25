import type { JSX } from 'react';


export interface IRender{
    renderAll(): Promise<JSX.Element>;
    renderSingle(id: number): Promise<JSX.Element>;
    renderAllFilterd(field: string, value: string): Promise<JSX.Element>
    
    getDataFieldList(): Promise<string[]>;
}
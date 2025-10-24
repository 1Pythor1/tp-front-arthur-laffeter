import type { JSX } from 'react';


export interface IRender{
    renderAll(): Promise<JSX.Element>;
    renderSingle(id: number): Promise<JSX.Element>;
}
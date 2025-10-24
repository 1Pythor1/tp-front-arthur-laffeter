import type { JSX } from 'react';


export interface IRender{
    render(): Promise<JSX.Element>;
}
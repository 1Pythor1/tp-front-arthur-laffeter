import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';

import { AppComponent } from '../App/AppComponent.tsx'
import type { IRender } from '../../Interfaces/IRender.ts';

import './index.css';

export function main(renderer: IRender, itemRoute: string){
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <BrowserRouter>

            <AppComponent render={renderer} itemRoute={itemRoute}/>

            </BrowserRouter>
        </StrictMode>,
)
}
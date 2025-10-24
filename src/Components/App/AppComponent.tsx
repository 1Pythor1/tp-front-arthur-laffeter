import { ItemListe } from '../ItemList/ItemListComponent.tsx';
import { Header } from '../Header/Header.tsx';

import './AppComponent.css'
import type { IRender } from '../../Interfaces/IRender.ts';


export function AppComponent({render}: {render: IRender}) {  
    return (
      <>
        <Header/>
        <ItemListe render={render}/>
      </>
    )
}


import { useEffect, useState } from 'react';
import { ItemListe } from '../ItemList/ItemListComponent.tsx';

import './AppComponent.css'
import type { IRender } from '../../Interfaces/IRender.ts';


export function AppComponent({render}: {render: IRender}) {  
    return (
      <>
        Hi
        <ItemListe render={render}/>
      </>
    )
}


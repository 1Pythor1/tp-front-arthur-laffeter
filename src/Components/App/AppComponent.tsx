import { Routes, Route } from 'react-router-dom';

import { ItemListe } from '../ItemList/ItemListComponent.tsx';
import { Header } from '../Header/Header.tsx';

import './AppComponent.css'
import type { IRender } from '../../Interfaces/IRender.ts';
import { ItemSingle } from '../ItemSingle/ItemSingle.tsx';


export function AppComponent({render}: {render: IRender}) {  
    return (
      <>
        <Header/>                
        <Routes>
          <Route path="/" element={<ItemListe render={render}/>}/>
          <Route path="/user/:id" element={<ItemSingle render={render}/>} />
      </Routes>
      </>
    )
}


import { Routes, Route, Navigate } from 'react-router-dom';

import { ItemListe } from '../ItemList/ItemListComponent.tsx';
import { Header } from '../Header/Header.tsx';

import './AppComponent.css'
import type { IRender } from '../../Interfaces/IRender.ts';
import { ItemSingle } from '../ItemSingle/ItemSingle.tsx';
import { Spiner } from '../Spiner/Spiner.tsx';


export function AppComponent({render, itemRoute}: {render: IRender, itemRoute: string}) {  
    const itemPath: string = `/${itemRoute}/:id`;
    return (
      <>
        <Header/>                
        <Routes>
          <Route path="/" element={<ItemListe render={render}/>}/>
          <Route path={itemPath} element={<ItemSingle render={render}/>} />          

          <Route path="/spiner" element={<Spiner/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </>
    )
}


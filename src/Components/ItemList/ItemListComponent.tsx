
import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import type { IRender } from '../../Interfaces/IRender';

import './ItemList.css'
import { Spiner } from '../Spiner/Spiner';

export function ItemListe({render}: {render: IRender}) {    
    const [ itemListe, setItemListe] = useState<JSX.Element>();
    const [ isLoading, setIsLoading] = useState(true); 
    const [ search, setSearch] = useState("");   

    useEffect(() => {
        async function fetchData() {        
            setItemListe(await render.renderAll());
            setIsLoading(false);
        }
        fetchData();
    }, [render]);

    useEffect(() => {
        console.log("Search changed:", search);
    }, [search]);

    return isLoading 
        ? <Spiner/>
        : <div id="item-liste-container">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div id="item-liste">            
                    {itemListe}
            </div> 
          </div>;
        
}


import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import type { IRender } from '../../Interfaces/IRender';

import './ItemList.css'

export function ItemListe({render}: {render: IRender}) {    
    const [ itemListe, setItemListe] = useState<JSX.Element>();

    useEffect(() => {
        async function fetchData() {        
            setItemListe(await render.renderAll());
        }
        fetchData();
    }, [render]);

    return (
        <div id="item-liste">            
            {itemListe}
        </div>
    );
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { JSX } from 'react';
import type { IRender } from '../../Interfaces/IRender';
import { Link } from "react-router-dom";

import './ItemSingle.css'


export function ItemSingle({render}: {render: IRender}) {
    const { id } = useParams<{ id: string }>();
    const [ itemSingle, setItemListe] = useState<JSX.Element>();

    useEffect(() => {        
        async function fetchData() {     
            if (!id) throw new Error("ID parameter is missing");   
            setItemListe(await render.renderSingle(parseInt(id)));
        }
        fetchData();
    }, [render]);

    return (
        <div>
            <div id="item-single">            
                {itemSingle}            
            </div>
            <Link to={'/'}>
                <button id="back-button">Back</button>
            </Link>            
        </div>
        

    );
}


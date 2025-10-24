
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { JSX } from 'react';
import type { IRender } from '../../Interfaces/IRender';
import { Link } from "react-router-dom";
import { Spiner } from '../Spiner/Spiner';

import './ItemSingle.css'


export function ItemSingle({render}: {render: IRender}) {
    const { id } = useParams<{ id: string }>();
    const [ itemSingle, setItemListe] = useState<JSX.Element>();
    const [ isLoading, setIsLoading] = useState(true);

    useEffect(() => {        
        async function fetchData() {     
            if (!id) throw new Error("ID parameter is missing");   
            setItemListe(await render.renderSingle(parseInt(id)));
            setIsLoading(false);
        }
        fetchData();
    }, [render]);

    return isLoading 
            ? <Spiner/>
            : <div>
                <div id="item-single">            
                    {itemSingle}            
                </div>
                <Link to={'/'}>
                    <button id="back-button">Back</button>
                </Link>            
              </div>;
    
}


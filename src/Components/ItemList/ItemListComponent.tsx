
import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import type { IRender } from '../../Interfaces/IRender';

import './ItemList.css'
import { Spiner } from '../Spiner/Spiner';
import { Select } from '../Select/Select';
import { SELECT_A_FIELD } from '../../Core/constantes';


export function ItemListe({render}: {render: IRender}) {       
    const [ itemListe, setItemListe] = useState<JSX.Element>();
    const [ isLoading, setIsLoading] = useState(true); 
    const [ dataFields, setDataFields] = useState<string[]>([]); 
    const [ dataFieldSelected, setDataFieldSelected] = useState<string>(SELECT_A_FIELD); 
    const [ search, setSearch] = useState("");   

    useEffect(() => {
        async function fetchData() {        
            setItemListe(await render.renderAll());            
            setDataFields(await render.getDataFieldList());            
            setIsLoading(false);
        }
        fetchData();
    }, [render]);

    useEffect(() => {
        async function fetchData() {        
            if(!(dataFieldSelected === SELECT_A_FIELD)){
                setItemListe(await render.renderAllFilterd(dataFieldSelected, search))
            };
        }
        fetchData();
    }, [search]);

    return isLoading 
        ? <Spiner/>
        : <div id="item-liste-container">
            <Select optionText={dataFields} value={dataFieldSelected} setValue={setDataFieldSelected}/>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} readOnly={dataFieldSelected === SELECT_A_FIELD}/>
      
            <div id="item-liste">            
                    {itemListe}
            </div> 
          </div>;
        
}


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
    const [ index, setIndex] = useState(-1); 
    const [ dataLength, setDataLength] = useState(0); 
    const step: number = 7;

    useEffect(() => {
        async function fetchData() { 
            setIsLoading(true);       
            setItemListe(await render.renderAll(index, step));            
            setDataFields(await render.getDataFieldList());  
            setDataLength(await render.getNumberOfData());       
            setIsLoading(false);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setIndex(-1);
    }, [search])

    useEffect(() => {
        async function fetchData() {    

            if(!(dataFieldSelected === SELECT_A_FIELD)){                 
                setItemListe(await render.renderAllFilterd(dataFieldSelected, search, index, step));
                setDataLength(await render.getNumberOfData(true, dataFieldSelected, search));
                setIsLoading(false);
                return
            }
            
            setItemListe(await render.renderAll(index, step)); 
            setDataLength(await render.getNumberOfData());
            setIsLoading(false);
        }
        fetchData();
    }, [search, index]);

    return isLoading 
        ? <Spiner/>
        : <div id="item-liste-container">
            <Select optionText={dataFields} value={dataFieldSelected} setValue={setDataFieldSelected}/>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} readOnly={dataFieldSelected === SELECT_A_FIELD}/>
            <div id="item-liste-wrapper">
                <div id="item-liste">            
                    {itemListe}
                </div> 
            </div>
            <div id="item-button-wrapper">
                <button onClick={() => -1 < index? setIndex(index - 1) : null}>&#x276E;</button>
                <div>{index + 2} / {Math.ceil(dataLength / step)}</div>
                <button onClick={() =>  index < ((dataLength / step) - 2)? setIndex(index + 1): null}>&#x276F;</button>
            </div>
          </div>;
        
}

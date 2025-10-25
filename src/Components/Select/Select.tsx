import { useState } from "react"
import "./Select.css"

export function Select({optionText, value, setValue}: {optionText: string[], value: string, setValue: (val: string) => void}) {
    const [toggled, setToggled] = useState(false);
    return (
        <div id="select-button" >
            <button onClick={() => {setToggled(!toggled)}}>{value.replace('_', ' ')}</button>
            {toggled
                ?<div id="select-options">
                    {optionText.map((option) => (                        
                        <div className="option" key={option} onClick={() => {setValue(option); setToggled(false)}}>{option.replace('_', ' ')}</div>
                    ))}
                 </div>
                : null
            }
        </div>
      
    )
}
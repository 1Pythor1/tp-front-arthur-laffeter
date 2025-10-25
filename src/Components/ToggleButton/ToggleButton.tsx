import { useState } from "react"
import "./ToggleButton.css"

export function ToggleButton({innerText}: {innerText: string}) {
    const [toggled, setToggled] = useState(false);
    return (
      <button id="toggle-button" className={toggled? "toggle-button-on" : "toggle-button-off"} onClick={() => {setToggled(!toggled)}}>{innerText}</button>
    )
}
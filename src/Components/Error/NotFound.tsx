import { MORGANA } from "../../Core/constantes"
import "./NotFound.css"

export function ErrorNotFound() {
    return (
      <div id="error-not-found">
        <img src={MORGANA} alt="Morgana qui pleure" />
        <h2>404 Page Not Found</h2>
      </div>
    )
}
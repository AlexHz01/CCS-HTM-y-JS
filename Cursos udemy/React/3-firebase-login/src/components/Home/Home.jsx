import { Link } from "react-router-dom"

export function Home(props) {
    return (
        <div>
            <h1>Pagina de kike</h1>
            <h2>
                <Link to="/login">Login</Link>
            </h2>
            <br />
            <h2>
                <Link to="/signup">Signup</Link>
            </h2>
            <h2>{props.name?`Bienvenido - ${props.name}`:"iniciar"}</h2>
        </div>
    )
}
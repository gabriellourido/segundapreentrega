import {CartWidget} from "./CartWidget"
import {NavLink, Link} from 'react-router-dom';

export function NavBar(){
    const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9Bn335EFfoA264hqLe5LYdhJlB3fNbeQraEZ_lKkjeO5HUZXNRAVUi9-GQ2AYhKa3zg&usqp=CAU";
    return (
        <nav className="nav">
            <div className="logoYtitulo">
                <Link to="/"><img className="logo" src={logo} alt="Logo de Tienda"/></Link>
                <Link to="/"><h2 className="titulo">Tienda de Tecnología</h2></Link>
            </div>    

            <ul className="btn-container">
                <li className="btn">
                    <NavLink to="/categoria/altaResolucion">Alta resolucion</NavLink>
                </li>
                <li className="btn">
                    <NavLink to="/categoria/smartTV">Smart TV</NavLink> 
                </li>
                <li className="btn">
                    <NavLink to="/categoria/curvo">Curvo</NavLink> 
                </li>
            </ul>

            <Link to= "/carrito">
                <CartWidget/>
            </Link>
        </nav>
    )
}
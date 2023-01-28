import fotoArg from '../images/argentina.svg'

export default function Header(){
    return(
        <nav className="nav-container">
            <img src={fotoArg} width="24px"  />
            <h1 className="nav-titulo">Rincones de Argentina</h1>
        </nav>
    )
}
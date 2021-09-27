import logo from '../images/logo1.png'
import { Link } from 'react-router-dom'



function Header() {

    let activeLink = document.querySelector('.active')
    const changeActiveLink = (e) => {
        activeLink.className = "nav-link"
        activeLink = e.target
        activeLink.className += ' active'
    }
    
    return (
        <header>
            <div className="header">
                <Link to="/#" className="header-logo">
                    <img className="header__img" src={logo} alt="Logo" />
                </Link>
                <nav> 
                    <ul class="nav">
                        <li class="nav-item"> <Link class="nav-link active" onClick={changeActiveLink} to="/#">Home</Link></li>
                        <li class="nav-item"> <Link class="nav-link" onClick={changeActiveLink} to="/#movies">Movies</Link></li>
                        <li class="nav-item"> <Link class="nav-link" onClick={changeActiveLink} to="/#tv">TV Shows</Link></li>
                        
                    </ul>
                </nav>
                <ul class="control">
                    <li class="control-item"> 
                        <Link to="/search"> 
                            <button class="control-btn control-btn_search"></button>
                        </Link>    
                    </li>
                    <li class="control-item"> 
                        <button class="control-btn control-btn_account"></button>
                    </li>
                </ul>
            </div>
        </header>
    )
}


export default Header 
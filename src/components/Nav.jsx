import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Nav.scss';

function Nav() {
  
    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-brand text-white'><h2>NewTech</h2></Link>

            <div className='navbar-nav'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link to="/Contextualizacao" className='nav-link text-light'>Contextualização</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Problema" className='nav-link text-light'>Problema</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Causas" className='nav-link text-light'>Efeitos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/ProblemaxSolucao" className='nav-link text-light'>Problema x Solução</Link>
                    </li>
                </ul>
                <ul className="dropdown-menu">
                    <li><Link to="/login" className='nav-link-dropdown dropdown-item'>Login</Link></li>
                    <li><Link to="cadastro" className='nav-link-dropdown dropdown-item'>Cadastro</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
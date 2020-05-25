import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Header = () => {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setLogado(true);
    } else {
      setLogado(false);
    }
  }, [logado])

  const logout = () => {
    localStorage.removeItem('token');
    setLogado(false);
    window.location.reload();
  }

  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>MyMoney</Link>

        {logado &&
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <button type='button' className='btn nav-link' onClick={logout}>Sair</button>
            </li>
          </ul>
        }

      </div>
    </nav>
  )
}

export default Header;
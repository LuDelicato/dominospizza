import React from 'react';

function Navbar(props) {
  const { toggleProducts, cart } = props;

  return (
    <>
      <nav className='navbar'>
        <h1>
          <a
            href='/'
            onClick={(event) => {
              event.preventDefault();
              toggleProducts(false);
            }}>
            <img
              src='https://cache.dominos.com/olo/6.102.5/assets/build/images/img/dpz-logo.svg'
              alt="Domino's Pizza"
            />
          </a>
        </h1>
        <ul>
          <li>
            <a href='/pt/pages/order/'>Encomenda Online</a>
          </li>
          <li>
            <a
              href='/'
              onClick={(event) => {
                event.preventDefault();
                toggleProducts(true);
              }}>
              Menu
            </a>
          </li>
          <li>
            <a href='/'>Promoções</a>
          </li>
          <li>
            <a href='/'>Lojas</a>
          </li>
          <li>
            <a href='/'>Segue o teu pedido</a>
          </li>
          <li>
            <a href='/'>Franchising</a>
          </li>
          <li className='login'>
            <a href='/'>Faz Login</a>
          </li>
          <li className='cart'>
            <a href='/'>Carrinho ({cart.length})</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

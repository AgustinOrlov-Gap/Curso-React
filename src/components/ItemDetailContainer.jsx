import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContent/CartContext';
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { addToCart } = useCart();
  const [cartCount, setCartCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemString = searchParams.get('item');
  const item = JSON.parse(itemString);

  if (!item) {
    return <div>No se encontraron detalles del artículo.</div>;
  }

  const buyProduct = () => {
    addToCart(item);
    setCartCount((prevCount) => prevCount + 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{item.nombre}</h2>
      <img
        src={item.imagen}
        alt={item.nombre}
        style={{
          width: '80%',
          height: '400px',
          objectFit: 'cover',
          marginBottom: '10px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <p>{item.descripcion}</p>
      <p>Stock: {item.stock}</p>
      <br />
      <p style={{ fontSize: '20px' }}>{`$ ${item.precio}`}</p>
      <br />
      {addedToCart && <p style={{ color: 'green' }}>¡Producto agregado al carrito!</p>}
      <button
        onClick={buyProduct}
        style={{
          backgroundColor: '#9359BE',
          color: 'white',
          padding: '8px 10px',
          fontSize: '16px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Comprar
      </button>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          marginBottom: '16px',
          backgroundColor: '#C6A97E',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.3s',
          marginLeft: '20px',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#C6A97E')}
      >
        Volver
      </Link>
    </div>
  );
};

export default ItemDetailContainer;

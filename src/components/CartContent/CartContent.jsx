// CartContent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import Checkout from './Checkout';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Establecer el elemento raíz del DOM

const CartContent = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Calcular el monto total
  const totalAmount = cart.reduce((total, product) => {
    return total + product.precio * product.quantity;
  }, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>

      <ul>
        {cart.map((product) => (
          <li key={product.id} style={{ marginBottom: '16px' }}>
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  style={{ width: '50px', height: '50px', marginRight: '16px' }}
                />
                <div>
                  <h3>{product.nombre}</h3>
                  <p>${product.precio} x {product.quantity}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '2vw', display: 'flex' }}>
                  <div style={{ marginRight: '1vw' }}>
                    <button onClick={() => incrementQuantity(product.id)}>+</button>
                  </div>
                  <button onClick={() => decrementQuantity(product.id)}>-</button>
                </div>
                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Botón para abrir el modal y Volver al inicio */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#C6A97E',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#C6A97E')}
        >
          Volver
        </Link>

        <button
          onClick={() => setModalIsOpen(true)}
          style={{
            backgroundColor: '#9359BE',
            color: 'white',
            padding: '8px 10px',
            fontSize: '16px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Ir a Checkout
        </button>
      </div>

      {/* Renderizar el modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            width: '80%',
            maxWidth: '600px',
            margin: 'auto',
          },
        }}
        ariaHideApp={false}
      >
        <Checkout totalAmount={totalAmount} cart={cart} />
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>

      {/* Muestra el monto total */}
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Monto Total: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default CartContent;

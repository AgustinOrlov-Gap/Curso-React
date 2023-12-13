// Checkout.jsx
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ totalAmount, cart }) => {
  const handleCompraClick = () => {
    toast.success('Compra Realizada', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => {
        history.push('/');
      }, 3000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Checkout</h2>
      <ul style={styles.list}>
        {cart.map((product) => (
          <li key={product.id} style={styles.listItem}>
            <div style={styles.productInfo}>
              <h3 style={styles.productName}>{product.nombre}</h3>
              <p style={styles.productDetails}>${product.precio} x {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <p style={styles.totalAmount}>Monto Total: ${totalAmount.toFixed(2)}</p>

      {/* Botón "Comprar" */}
      <button onClick={handleCompraClick} style={styles.comprarButton}>
        Comprar
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparencia
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    maxHeight: '300px', // Altura más pequeña
    overflowY: 'auto', // Scroll si hay demasiados elementos
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '16px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '8px',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  productDetails: {
    fontSize: '16px',
    color: '#777',
  },
  totalAmount: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#333',
  },
  comprarButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
    border: 'none',
  },
};

export default Checkout;

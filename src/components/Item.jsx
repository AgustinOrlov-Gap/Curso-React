import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  <div style={{ width: '300px', border: '1px solid #ddd', margin: '10px', padding: '10px', textAlign: 'center' }}>
    <img
      src={item.imagen} // Ajusta la propiedad de la imagen según la estructura de tu documento
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
    <br />
    <h2>{item.nombre}</h2>
    <br />
    <p>Precio</p>
   
    <p>{`$ ${item.precio}`}</p>
  
    {/* Otros atributos según la estructura de tu documento */}
    <br />
    <Link to={`/Detail/${item.id}?item=${JSON.stringify(item)}`}>
      <button
        style={{
          backgroundColor: '#9359BE',
          color: 'white',
          padding: '8px 10px',
          fontSize: '16px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Ver Detalles
      </button>
    </Link>
  </div>
);

export default Item;

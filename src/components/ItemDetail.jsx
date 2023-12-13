import React from 'react';

const ItemDetail = ({ selectedItem }) => (
  <div>
    <h2>{selectedItem.nombre}</h2>
    <p>{selectedItem.descripcion}</p>
    <p>{`$ ${selectedItem.precio}`}</p>
    {/* Otros detalles del producto */}
    <img
      src={selectedItem.imagen}
      alt={selectedItem.nombre}
      style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
    />
    <p>Stock: {selectedItem.stock}</p>
    {/* Agrega otros detalles según la estructura de tus documentos en Firestore */}
  </div>
);

export default ItemDetail;

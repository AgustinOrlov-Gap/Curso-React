import React, { useState, useEffect } from 'react';
import Item from './Item';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemList = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const productsCollection = collection(db, 'productos');

        let filteredQuery = query(productsCollection);

        if (searchTerm.trim() !== '') {
          const searchTermLowerCase = searchTerm.toLowerCase();
          filteredQuery = query(
            productsCollection,
            where('busqueda', '>=', searchTermLowerCase),
            where('busqueda', '<=', searchTermLowerCase + '\uf8ff')
          );
        }

        if (selectedCategory !== '') {
          const categoryQuery = query(productsCollection, where('categoria', '==', selectedCategory));
          const categoryQuerySnapshot = await getDocs(categoryQuery);
          const categoryItems = categoryQuerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setData(categoryItems);
        } else {
          const querySnapshot = await getDocs(filteredQuery);
          const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setData(items.slice(0, 10));
        }
      } catch (error) {
        console.error('Hubo un error:', error);
      }
    };

    fetchData();
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Buscar productos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '16px',
            width: '300px',
            marginRight: '16px',
            borderRadius: '8px', // Haciendo redondeada la barra de búsqueda
          }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ marginRight: '8px', fontSize: '16px' }}>
          Filtrar por categoría:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '4px',
            fontSize: '16px',
          }}
        >
          <option value="">Todas</option>
          <option value="Componentes">Componentes</option>
          <option value="Perifericos">Periféricos</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {data.map((item, index) => (
          <Item key={index} item={item} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

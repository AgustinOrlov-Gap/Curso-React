import React from 'react'
import ImageCarousel from './ImageCarousel ';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

  const images = [
    'src/images/img1.jpg',
    'src/images/img2.jpg',
    'src/images/img3.jpg',
    'src/images/img4.jpg',
    'src/images/img5.jpg',
    // Agrega más rutas de imágenes según sea necesario
  ];




  return (
    <div>
      <br/>
      <p style={{ fontSize: '28px' }}>
     {greeting}
      </p>

      <br/>

      <ImageCarousel images={images}  imageWidth="600px" imageHeight="400px" />

      <br/>
      <br/>
      <ItemList />
    </div>
     
    
  
  )
}

export default ItemListContainer
import React from 'react'
import ImageCarousel from './ImageCarousel ';

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
      <h3>
        {greeting}
      </h3>
      <br/>

      <ImageCarousel images={images}  imageWidth="600px" imageHeight="400px" />

    </div>
     
    
  
  )
}

export default ItemListContainer
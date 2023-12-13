// CartWidget.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartItemCount }) => {
  return (
    <Link className='seeCart' to={"/cart"}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#364253' }}>
        <FaShoppingCart size={20} />
        {cartItemCount > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: 'rgba(255,69,0,0.7)',
              color: '#fff',
              borderRadius: '50%',
              padding: '4px',
              height: '25px',
              width: '17px',
              fontSize: '12px',
            }}
          >
            {cartItemCount}
          </div>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyAccount.css';
import Axios from 'axios';

export default function MyAccount() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const baseUrl = 'http://15.229.4.24:3002'

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get(`${baseUrl}/add/userproduct`, {
          headers: {
            Authorization: token
          }
        });

        setProductList(response.data.products);
        console.log('Producst:list', response.data.products);
      } catch (err) {
        console.log(err);
        setError('Failed to retrieve user products');
      }
    }
    fetchData();
  }, []);

  const removeProduct = async (id) => {
    console.log('id', id);
    try {
      const response_remove = await Axios.post(`${baseUrl}/add/remove`, {
        productId: id
      }, {
        headers: {
          Authorization: token
        }
      });

      const updatedList = productList.filter(product => product.id !== id);
      setProductList(updatedList);
    } catch (err) {
      console.log(err);
      setError('Failed to remove product');
    }
  };

  const editProduct = (product) => {
    navigate(`/edit-advertisement/${product.id}`, { state: product });
  };

  return (
    <div className='body'>
      <div className="max-limit">
        <div className='add'>
          <h2>My Advertises</h2>
          <button onClick={() => navigate('/add-advertise')}> Add an advertise </button>
        </div>
        <div className="add-header">
          <h4 className='pic'>Picture</h4>
          <h4 className='title'>Title</h4>
          <h4 className='price'>Price</h4>
          <h4 className='act '>Actions</h4>
        </div>
        {error ? (
          <div className="error-message">{error}</div> // render error message if error state is not null
        ) : (
          <div className="product">
            {productList.map(product => (
              <div key={product.id} className="product-row">
                <img src={`${baseUrl}/${product.picPath}`} alt={product.name} className="pic" />
                <h4 className='title'>{product.name}</h4>
                <p className='price'>R${product.price}</p>
                <div className='act'>
                  <button className='edit' onClick={() => editProduct(product)}>Edit</button>
                  <button className='remove' onClick={() => removeProduct(product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

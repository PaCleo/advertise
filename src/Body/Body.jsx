import React, { useState, useEffect } from 'react';
import './Body.css';
import SelectProduct from '../assets/SelectionProduct';
import SelectPrice from '../assets/SelectionPrice';
import SelectState from '../assets/SelectionState';
import Axios from 'axios';

function Body() {
    const [productList, setProductList] = useState([]);
    const [selectProduct, setSelectProduct] = useState('');
    const [selectPrice, setSelectPrice] = useState('');
    const [selectState, setSelectState] = useState('');
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    async function handleSearch() {
        console.log(selectPrice, selectProduct, selectState);
        try {
            const response = await Axios.get('http://15.229.4.24:3002/add/getproduct', {
                headers: {
                    Authorization: token,
                },
                params: {
                    selectProduct,
                    selectPrice,
                    selectState,
                },
            });

            setProductList(response.data.products);
        } catch (err) {
            console.log(err);
            setError('Failed to retrieve user products');
        }
    }


    return (
        <body className="body">
            <div className="max-limit">
                <div className="search">
                    <div className="advancedsearch">
                        <SelectProduct value={selectProduct} onChange={(e) => setSelectProduct(e.target.value)} />
                        <SelectPrice value={selectPrice} onChange={(e) => setSelectPrice(e.target.value)} />
                        <SelectState value={selectState} onChange={(e) => setSelectState(e.target.value)} />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <div className="add-header">
                    <h4 className='picbox'>Picture</h4>
                    <h4 className='title'>Title</h4>
                    <h4 className='price'>Price</h4>
                    <h4 className='state'>State</h4>
                </div>
                {error ? (
                    <div className="error-message">{error}</div> // render error message if error state is not null
                ) : (
                    <div className="product">
                        {productList.map(product => (
                            <div key={product.id} className="product-row">
                                <div className='picbox'>
                                <img src={product.image} alt={product.name} className="pic" />
                                </div>
                                <h4 className='title'>{product.name}</h4>
                                <p className='price'>R${product.price}</p>
                                <p className='state'>{product.state.toUpperCase()}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </body>
    );
}

export default Body;
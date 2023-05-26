import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Edit.css';


function Edit() {
    const { id } = useParams();
    const [nameReg, setNameReg] = useState();
    const [priceReg, setPriceReg] = useState();
    const [stateReg, setStateReg] = useState();
    const [product, setProduct] = useState({});
    const token = localStorage.getItem('token');
    const [successMsg, setSuccessMsg] = useState("");
    const [unsuccesMsg, setUnsuccesMsg] = useState("");
    const baseURL = "http://localhost:3002"

    useEffect(() => {
        async function getProduct() {
            try {
                console.log(token);
                const response_search = await Axios.get(
                    `${baseURL}/add/getproduct/${id}`, {
                    headers: {
                        Authorization: token
                    }
                });
                setProduct(response_search.data.product);
                setNameReg(response_search.data.product.name);
                setPriceReg(response_search.data.product.price);
                setStateReg(response_search.data.product.state);
            } catch (err) {
                console.log(err);
                console.log('teste');
            }
        }
        getProduct();
    }, [id, token]);

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };


    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', nameReg);
            formData.append('price', priceReg);
            formData.append('state', stateReg);
            formData.append('image', image);

            const response = await Axios.patch(
                `http://localhost:3002/add/product/${id}`,
                formData,
                { headers: { Authorization: token } }
            );
            console.log(response.data);
            setSuccessMsg("Product updated successfully!");
        } catch (err) {
            console.log(err);
            setSuccessMsg("");
            setUnsuccesMsg("Error: Unsucessful to updated the product");

        }
    };

    return (
        <div className='edit-page'>
            <div className="max-limit box">
                {successMsg && (
                    <div className="success-message">{successMsg}</div>
                )}
                {unsuccesMsg && (
                    <div className="unsuccess-message">{successMsg}</div>
                )}
                <h2>Edit an Announce</h2>
                <div>
                    <form action="">
                        <h4>Name</h4>
                        <input
                            type="text" value={nameReg}
                            onChange={e => setNameReg(e.target.value)}
                        />

                        <h4>Price</h4>
                        <input
                            placeholder='{price}'
                            type="number" value={priceReg}
                            onChange={e => setPriceReg(e.target.value)}
                        />

                        <h4>Image</h4>
                        <input
                            type="file"
                            onChange={handleImageChange}
                        />


                        <h4>Product Status</h4>
                        <select value={stateReg} onChange={(e) => setStateReg(e.target.value)}>
                            <option value="">Select a status</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>

                        <button
                            onClick={handleEdit}
                            className='editbutton'>
                            Click to Edit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;
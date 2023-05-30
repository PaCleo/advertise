import React from 'react';
import Axios from 'axios';
import { useState } from 'react';

function Add() {
    const [nameReg, setNameReg] = useState('');
    const [priceReg, setPriceReg] = useState('');
    const [stateReg, setStateReg] = useState('');
    const [categoryReg, setCategoryReg] = useState('');
    const cachedToken = localStorage.getItem('token');
    const [successMsg, setSuccessMsg] = useState("");
    const [unsuccessMsg, setUnsuccessMsg] = useState("");
    const baseURL = "http://15.229.4.24:3002"

    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post(`${baseURL}/add/productreg`, {
                name: nameReg,
                price: priceReg,
                state: stateReg,
                category: categoryReg,
            }, {
                headers: {
                    Authorization: cachedToken
                }
            });
            setSuccessMsg("Product added successfully!");
            setUnsuccessMsg("");
        } catch (err) {
            console.log(err);
            setSuccessMsg("");
            setUnsuccessMsg("Error unsucessful to add the product");
        };

    };

    return (
        <div className='edit-page'>
            <div className="box max-limit">
                {successMsg && (
                    <div className="success-message">{successMsg}</div>
                )}
                {unsuccessMsg && (
                    <div className="unsuccess-message">{unsuccessMsg}</div>
                )}
                <h2>Add an Announce</h2>
                <div>
                    <form action="">

                        <h4>Title</h4>
                        <input                   
                            type="text" value={nameReg}
                            onChange={e => setNameReg(e.target.value)}
                        />

                        <h4>Value</h4>
                        <input
                            type="number" value={priceReg}
                            onChange={e => setPriceReg(e.target.value)}
                        />

                        <h4>Product Category</h4>
                        <select value={categoryReg} onChange={(e) => setCategoryReg(e.target.value)} required>
                            <option value="">Select a status</option>
                            <option value="Motherboard">Motherboard</option>
                            <option value="GPU">GPU</option>
                            <option value="RAM">RAM</option>
                        </select>

                        <h4>Product status</h4>
                        <select value={stateReg} onChange={(e) => setStateReg(e.target.value)} required>
                            <option value="">Select a status</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>

                        <button
                            onClick={register}
                            className='editbutton'>
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";

const Curd = () => {
    const [data, setdata] = useState([]);
    const [addData, addinputDtat] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/posts").then((res) => {
            setdata(res.data);
            console.log(res);
        });
    }, []);

    const Add = (e) => {
        axios.post('http://localhost:4000/posts', addData).then(res => {
            console.log(res);
        })
    }

    const DeleteData = (id) => {
        axios.delete(`http://localhost:4000/posts/${id}`).then((res) => {
            setdata(data.filter(dele => dele.id !== id));
            console.log(res.data);

        })
    };

    return (

        <div className='container mt-5'>
            <center className='mb-4'>
                <input type="text" className='me-3' onChange={(e) => addinputDtat({ ...addData, name: e.target.value })} />
                <input type="email" className='mb-3' onChange={(e) => addinputDtat({ ...addData, email: e.target.value })} />
                <br />
                <button onClick={Add} className='btn btn-info'>Add</button>
            </center>
            {data.map((e, ind) => {
                return (
                    <>
                        <div className='d-flex'>
                            <h5 className='me-5'>{e.name}</h5>
                            <h5 className='me-5'>{e.email}</h5>

                            <div>
                                <button className='btn btn-primary me-3'>Edit</button>
                                <button className='btn btn-danger' onClick={() => DeleteData(e.id)}>Delete</button>

                            </div>
                        </div>
                        <hr />
                    </>
                );
            })}
        </div>
    );
}

export default Curd;

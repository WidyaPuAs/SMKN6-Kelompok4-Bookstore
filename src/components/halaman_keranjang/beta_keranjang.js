import axios from "axios";
import "../../App.css";
import "../../index.css";
import Bar from '../navbar/navbar';
import { Fragment,useState } from "react";
import Products from "../../js/produk";

import { Navigate, useNavigate } from 'react-router-dom';

const Beta_Keranjang = (props) => {
    // const navigate = useNavigate()
    let history = useNavigate();
    const handleDelete = (id) => {
        var index = Products.map(function(e) {
            return e.id
        }).indexOf(id);

        Products.splice(index,1);

        history('/keranjang1')
    }
    return (
        <div>
            <Bar />
            <Fragment>
                <div>
                    <table className="table-fixed">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Products && Products.length > 0
                                ?
                                Products.map((item) => {
                                    return(
                                        <tr>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {item.price}
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(item.id)}>Hapus</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Your Cart is Kosong"
                            }
                        </tbody>
                    </table>
                </div>
            </Fragment>
            
        </div>
    );
}

export default Beta_Keranjang;
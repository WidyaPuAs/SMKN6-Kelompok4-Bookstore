import Bar from "../nav/navbar";
import { Fragment,useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

const Beta_Keranjang = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <Bar />
            <Fragment>
                {/* <div>
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
                </div> */}
            </Fragment>
            
        </div>
    );
}

export default Beta_Keranjang;
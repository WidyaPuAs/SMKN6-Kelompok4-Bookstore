import React, { useEffect, useState } from "react";
import harrypotter from '../../assets/picbuku.png';
import unbirthday from '../../assets/unbirthday.png';
import thewendy from '../../assets/thewendy.png';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Bar from '../navbar/navbar';

function Halaman_Keranjang() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
  { id: 1, name: "Harry Potter: Half Blood Prince", price: 20000, quantity: 1, image: harrypotter },
  { id: 2, name: "Unbirthday", price: 30000, quantity: 1, image: unbirthday },
  { id: 3, name: "The Wendy", price: 10000, quantity: 1, image: thewendy },
]);


  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };
  

  const handleQuantityChange = (id, newQuantity) => {

    if (newQuantity < 1) {
      newQuantity = 1;
    }
    
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const checkoutData = {
      items: cartItems,
      total: subtotal,
    };

    // Kirim data ke halaman checkout
    // navigate('/checkout', { state: checkoutData });
  };

  return (
    <div className="bg-bg_cream min-h-screen">
      <Bar />
      <div className="flex mt-3 container mx-auto">
        <div className="mx-4 md:mx-8 py-8 w-full">
          <div className="bg-white shadow-md rounded-lg overflow-hidden px-4 md:px-10 py-4">
  
            <h1 className="text-2xl font-bold mb-10 mt-5">Keranjang Buku</h1>
            {cartItems.length === 0 ? (
              <div className="flex justify-center items-center h-40">
                <p className="text-gray-500 text-xl font-medium">Your cart is empty</p>
              </div>
            ) : (

              <div className="overflow-x-auto">
                <table className="table-auto w-full mb-4">
                  <thead>
                    <tr>
                      <th className="px-2 md:px-4 py-2">Produk</th>
                      <th className="px-2 md:px-4 py-2">Harga</th>
                      <th className="px-2 md:px-4 py-2">Jumlah</th>
                      <th className="px-2 md:px-4 py-2">Total</th>
                      <th className="px-2 md:px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="border px-2 md:px-4 py-2">
                          <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-16 h-auto mr-4" />
                            {item.name}
                          </div>
                        </td>

                        <td className="border px-2 md:px-4 py-2">Rp {item.price}</td>

                        <td className="border px-2 md:px-4 py-2 ">
                          <div className="flex items-center justify-center">
                            <button className="bg-gray-200 hover:bg-gray-400 rounded-l px-2 md:px-4 py-1" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                            <span className="border-l border-r px-4 py-1">{item.quantity}</span>
                            <button className="bg-gray-200 hover:bg-gray-400 rounded-r px-2 md:px-4 py-1" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                          </div>
                        </td>

                    <td className="border px-2 md:px-4 py-2">Rp {item.price * item.quantity}</td>
                    <td className="border px-2 md:px-4 py-2">

                    <div className="flex justify-center">
                      <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-800">Hapus</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
            )}
            <div className="flex justify-end mt-5">
              <p className="text-lg font-bold text-gray-800">Subtotal: Rp {subtotal}</p>
            </div>
            
            <div className="flex justify-center mt-10">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              // onClick={handleCheckout}
              onClick={() => navigate('/pembayaran')}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Halaman_Keranjang;
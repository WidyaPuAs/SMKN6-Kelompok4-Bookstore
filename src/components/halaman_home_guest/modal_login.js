import "../../App.css";
import "../../index.css";
import React, { useState } from "react";

const Modal_Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {isOpen ? (
        <div className="fixed z-50 inset-0 overflow-y-auto "    >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity pointer-events-none">
              <div className="absolute inset-0 opacity-75"></div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden w-full max-w-md mx-auto">
              <div className="p-4">
                <h2 className="text-2xl font-bold text-center mb-4"> Login untuk Melanjutkan </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2"> Email </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2"> Password </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="flex flex-row justify-between ">
                  <div className="flex justify-end">
                    <button onClick={onClose} className="bg-dark-cream text-white py-2 px-4 rounded-lg hover:bg-green-600"> 
                    Close 
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="bg-dark-cream text-white py-2 px-4 rounded-lg hover:bg-green-600">
                      Login
                    </button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal_Login;

'use client'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/features/userSlice';

export default function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email, username }));
    setName('');
    setEmail('');
    setUsername('');
  };

  return (

    <section className="max-w-4xl p-6 mx-auto my-10 bg-white rounded-3xl shadow-md dark:bg-blue-950">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white"> Crear nuevo usuario</h2>
    <form onSubmit={handleSubmit} className='my-6 '>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-gray-700 dark:text-gray-200">Nombre</label>
          <input
            id="name"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-700 dark:text-gray-200">Email</label>
          <input
            id="email"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username" className="text-gray-700 dark:text-gray-200">Username</label>
          <input
            id="username"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Guardar
        </button>
      </div>
    </form>
  </section>
  );
}

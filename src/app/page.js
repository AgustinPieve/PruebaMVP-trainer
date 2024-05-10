'use client'

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/features/userSlice';
import Pagination from './components/pagination';
import AddUserForm from './components/addUser';

export default function Page() {
  const [pagina, setPagina] = useState(1);
  const [maximo, setMaximo] = useState(5);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (status === 'success') { // Solo hace la solicitud si el estado es 'success', lo que significa que aún no se ha realizado ninguna solicitud
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed' || !users) { // Verifica si hay un error o si no hay datos de usuario disponibles
    return <div>Error: {error}</div>;
  }

  const maxPorPagina = Math.ceil(users.length / maximo); // Calcula el número máximo de páginas

  return (
    <div>
      <AddUserForm/>
      <div className="grid grid-cols-3 gap-3 flex justify-center items-center ">
        {users
          ?.slice(
            (pagina - 1) * maximo,
            (pagina - 1) * maximo + maximo
          )
          .map((e) => (
            <div
              key={e.name}
              className="bg-blue-950 mx-3 rounded-3xl border-black border-2  p-6">
              <h1>User: {e.username}</h1>
              <h3>Name: {e.name}</h3>
              <p>Email: {e.email}</p>
            </div>
          ))}
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maxPorPagina} />
      </div>
    </div>
  );
}

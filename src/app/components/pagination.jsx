import { useState } from "react";

const Pagination = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  return (
    <div className="flex justify-center items-center mt-6 fixed left-0 w-full p-2">
      <button
        disabled={pagina === 1 || pagina < 1}
        onClick={previousPage}
        className="">
        ◀️
      </button>
      <p className="mx-1">{input} </p>
      <p className="mx-1"> de {Math.ceil(maximo)}</p>
      <button
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
        className="">
        ▶️
      </button>
    </div>
  );
};

export default Pagination;
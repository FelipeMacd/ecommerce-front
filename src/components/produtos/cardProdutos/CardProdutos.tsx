import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-xl font-bold text-verde  text-center">
        {produto.nome}
      </h2>

      <p className="text-black font-medium text-base mt-4">Instrutor: <span className="font-normal">{produto.instrutor}</span></p>
      <p className="text-black font-medium text-base">Categoria: <span className="font-normal">{produto.categoria?.categoria} 
       {' '} - {produto.categoria?.tipo}</span></p>
      <p className="text-black font-medium text-base">Preço: <span className="font-normal">{produto.preco}</span></p>

      <div className="mt-4">
        <div className="flex justify-center">
          <Link
            to={`/editarProduto/${produto.id}`}
            className="w-1/2 text-white bg-azul-claro hover:bg-verde transition-all duration-300 py-2 flex justify-center items-center font-semibold"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarProduto/${produto.id}`}
            className="w-1/2 text-white bg-salmao hover:bg-red-700 transition-all duration-300 py-2 flex justify-center items-center font-semibold"
          >
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;

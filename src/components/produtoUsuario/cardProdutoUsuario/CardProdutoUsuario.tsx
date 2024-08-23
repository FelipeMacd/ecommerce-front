import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProdutoUsuario({ produto }: CardProdutoProps) {
  const notaAvaliacao = Math.random() * (5 - 4.2) + 4.2;
  const quantidadeAvaliaçoes = Math.random() * (360 - 150) + 150;

  const imageBaseUrl = "/produtos";
  const imageUrl = `${imageBaseUrl}/${produto.id}.png`;

  return (
    <Link
      to={`/produto/${produto.id}`}
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mt-3"
    >
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={produto.nome}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{produto.nome}</h2>
        <p className="text-gray-600 text-sm">{produto.instrutor}</p>
        <div className="flex items-center my-2">
          <span className="text-yellow-500 text-lg">
            {notaAvaliacao.toFixed(1)}
          </span>
          <div className="flex ml-2 text-yellow-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.415 8.23L12 18.897l-7.415 4.603L6 15.27 0 9.423l8.332-1.268z" />
            </svg>
          </div>
          <span className="ml-2 text-gray-600 text-sm">
            ({quantidadeAvaliaçoes.toFixed(0)})
          </span>
        </div>
        <div className="flex items-baseline">
          <span className="text-2xl font-semibold text-green-600">
            R${produto.preco}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CardProdutoUsuario;

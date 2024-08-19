import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import sobre from '../../../assets/sobre.jpg'

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {
    return (
      <div className='border-slate-950 border flex flex-col rounded overflow-hidden justify-between'>
        <div>
          <div className="flex w-full bg-sky-500 py-2 px-4 items-center gap-4">
          <h3 className='text-lg font-bold text-center uppercase '>{produto.nome}</h3>
          </div>
          <div className='p-4 '>
            <img src={sobre} alt="" />
            <p>{produto.descricao}</p>
            <p className='font-semibold py-2'>Categoria: {produto.categoria?.categoria}</p>
            <p className='font-semibold'>Instrutor: {produto.instrutor}</p>
            <p className='font-semibold py-2'>Preço: R${produto.preco}</p>
          </div>
        </div>
        <div className="flex">
        <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-sky-300 hover:bg-sky-500 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-300 hover:bg-red-500 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    )
  }

  export default CardProduto
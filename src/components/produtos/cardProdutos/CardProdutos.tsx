import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {
    return (
      <div className='border-slate-950 border flex flex-col rounded overflow-hidden justify-between'>
        <div>
          <div className="flex w-full bg-sky-500 py-2 px-4 items-center gap-4">
            <img src={produto.usuario?.foto} className='h-12 rounded-full' alt="" />
            <h3 className='text-lg font-bold text-center uppercase '>{produto.usuario?.nome}</h3>
          </div>
          <div className='p-4 '>
            <h4 className='text-lg font-semibold uppercase pb-3'>{produto.nome}</h4>
            <p>{produto.descricao}</p>
            <p className='font-semibold py-4'>Categoria: {produto.categoria?.categoria}</p>
            <p className='font-semibold py-4'>Instrutor: {produto.instrutor}</p>
            <p className='font-semibold py-4'>Preço: R${produto.preco}</p>
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
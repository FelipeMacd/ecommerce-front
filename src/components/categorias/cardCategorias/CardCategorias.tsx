import { Link } from 'react-router-dom';
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border rounded-lg shadow-lg p-4 flex flex-col justify-between text-center transition-all duration-300 hover:shadow-2xl'>
            <p className='text-gray-800 font-semibold text-lg'>
                {categoria.tipo}
            </p>

            <h2 className='text-3xl font-bold text-salmao'>
                {categoria.categoria}
            </h2>

            <div className='mt-4'>
                <div className="flex justify-center">
                    <Link to={`/editarCategoria/${categoria.id}`} className='w-1/2 text-white bg-azul-claro hover:bg-verde transition-all duration-300 py-2 flex justify-center items-center font-semibold'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarCategoria/${categoria.id}`} className='w-1/2 text-white bg-salmao hover:bg-red-700 transition-all duration-300 py-2 flex justify-center items-center font-semibold'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCategoria


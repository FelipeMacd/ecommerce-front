
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoriaUsuario({ categoria }: CardCategoriaProps) {
    return (
        <div className='border rounded-lg shadow-lg p-4 flex flex-col justify-between text-center transition-all duration-300 hover:shadow-2xl'>
            <p className='text-gray-800 font-semibold text-lg'>
                {categoria.tipo}
            </p>

            <h2 className='text-3xl font-bold text-salmao'>
                {categoria.categoria}
            </h2>            
        </div>
    )
}

export default CardCategoriaUsuario
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';

function Perfil() {
    let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)
  
  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      navigate("/login");
    }
  }, [usuario.token, navigate]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen gap-8">
      <div className="flex flex-col justify-center items-start text-left lg:w-1/3 p-6">
        <h2 className="text-6xl font-bold text-verde mb-4">Perfil</h2>

        <div className="mb-4">
          <p className="text-xl font-semibold uppercase">Nome</p>
          <p className="text-lg text-gray-700">
            {usuario.nome}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-xl font-semibold uppercase">Email</p>
          <p className="text-lg text-gray-700">{usuario.usuario}</p>
        </div>

        <button className="mt-6 bg-azul-claro hover:bg-verde text-white font-bold text-xl py-2 px-4 rounded uppercase">
          Meus Cursos
        </button>

        
      </div>

      <div className="relative w-72 h-72 lg:w-96 lg:h-96">
        <div className="rounded-full bg-salmao w-full h-full overflow-hidden absolute top-0 right-0 transform translate-x-12">
          <img
            src={usuario.foto}
            alt="Profile"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        
      </div>
    </div>
  );
}

export default Perfil;

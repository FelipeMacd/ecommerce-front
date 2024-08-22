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
        <h2 className="text-4xl font-bold text-verde mb-4">Perfil</h2>

        <div className="mb-4">
          <p className="text-lg font-semibold">NOME</p>
          <p className="text-lg text-gray-700">
            {usuario.nome}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">EMAIL</p>
          <p className="text-lg text-gray-700">{usuario.usuario}</p>
        </div>

        
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

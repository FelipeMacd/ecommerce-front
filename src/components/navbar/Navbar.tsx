import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import homeLogo from "../../assets/logo-mulheres-em-foco-sem-fundo.png";
import { Menu } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: "Login", link: "/login", current: false },
  { name: "Cursos", link: "/produtos", current: false },
  { name: "Categorias", link: "/categorias", current: false },
  { name: "Contato", link: "/contato", current: false },
];

function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
  }

  return (
    <nav className="bg-verde shadow-lg border-b-2 border-salmao">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto py-3">

        <Link to="/home" className="flex items-center">
          <img className="h-16 w-16" src={homeLogo} alt="Logo Mulheres em Foco" />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-cinza rounded-lg lg:hidden hover:bg-verde-700 focus:outline-none focus:ring-2 focus:ring-verde-600"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        <div className={`lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-medium">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="block py-2 pr-4 pl-3 text-lg text-cinza hover:text-rosa-claro transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* User Info and Profile Menu */}
        <div className="relative flex items-center space-x-4">
          {usuario ? (
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex items-center p-2 rounded-full bg-gray-800 text-sm text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <UserIcon className="w-8 h-8" />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <Link
                    to="/seu-perfil"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Seu Perfil
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={logout}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <Link
              to="/login"
              className="text-white bg-azul-claro hover:bg-verde-700 transition-all duration-300 py-2 px-4 rounded-lg font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

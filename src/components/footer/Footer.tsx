import { Link} from "react-router-dom";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="bg-white dark:bg-verde">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/home" className="flex items-center" onClick={scrollToTop}>              
                <span className="mt-4 uppercase self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Mulheres em Foco
                </span>
              </Link>
              <p className="mt-1 text-rosa-claro">Construindo o futuro das mulheres através da educação.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase dark:text-white">
                  Categorias
                </h2>
                <ul className="text-cinza font-medium">
                  <li className="mb-4">
                    <Link to="/cadastroCategoria" className="hover:text-salmao" onClick={scrollToTop}>
                      Adicionar Categoria
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categoriasAdm"
                      className="hover:text-salmao"
                      
                    >
                      Todas as categorias
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase dark:text-white">
                  Produtos
                </h2>
                <ul className="text-cinza font-medium">
                  <li className="mb-4">
                    <Link
                      to="/cadastroProduto"
                      className="hover:text-salmao "
                      onClick={scrollToTop}
                    >
                      Adicionar Curso
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/produtosAdm"
                      className="hover:text-salmao"
                      onClick={scrollToTop}
                    >
                      Todos os Cursos
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase dark:text-white">
                  Projeto
                </h2>
                <ul className="text-cinza font-medium">
                  <li className="mb-4">
                    <Link to="/sobrenos" className="hover:text-salmao" onClick={scrollToTop}>
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link to="/contato" className="hover:text-salmao" onClick={scrollToTop}>
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mb-3 mt-5 border-gray-200 sm:mx-auto dark:border-gray-700" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}Mulheres em Foco. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
